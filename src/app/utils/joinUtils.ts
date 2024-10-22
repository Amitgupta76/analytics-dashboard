interface JoinData {
    table1: string;
    table2: string;
    joinType: string;
  }
  
  export const isValidJoin = (joinData: JoinData): boolean => {
    const { table1, table2, joinType } = joinData;
    return !!(table1 && table2 && joinType);
  };
  
  export const formatJoin = (joinData: JoinData): string => {
    const { table1, table2, joinType } = joinData;
    return `${table1} ${joinType} ${table2}`;
  };
  