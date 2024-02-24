import { Pagination, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useGetAds } from "../../queries/useGetAds";
import Dropdown from "../Dropdown/Dropdown";
import AdListing from "../AdListing/AdListing";

function MainPanel() {
  const [sortBy, setSortBy] = useState<string | number>("Title");
  const [pageSize, setPageSize] = useState(10);
  const [pageNum, setPageNum] = useState(1);

  const {
    // @ts-expect-error because
    data: { data, pages },
  } = useGetAds({ pageNum, pageSize, sortBy: sortBy as string });

  return (
    <Stack spacing={4}>
      <Paper sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Dropdown
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          items={[
            { value: "Title", label: "Title" },
            { value: "Views", label: "Views" },
            { value: "AdType", label: "Ad Type" },
          ]}
        />
        <Dropdown
          label="Page size"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value as number)}
          items={[
            { value: "5", label: "5" },
            { value: "10", label: "10" },
            { value: "50", label: "50" },
          ]}
        />
      </Paper>
      <Paper>
        <AdListing data={data} />
      </Paper>
      <Paper sx={{ display: "flex", justifyContent: "center", p: 1 }}>
        <Pagination
          count={pages}
          page={pageNum}
          onChange={(_, value: number) => setPageNum(value)}
        />
      </Paper>
    </Stack>
  );
}

export default MainPanel;
