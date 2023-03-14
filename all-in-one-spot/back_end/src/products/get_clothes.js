app.get("/clothes", async (_, res) => {
  const query = `SELECT *FROM   `;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const result = (await con.execute(query))[0];
    console.log(result);

    await con.end();
    res.send(result).end;
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});
