import pandas as pd

# Function to convert Excel to HTML and save to file
def excel_to_html_table(file_path, output_file, table_id):
    # Read the Excel file
    df = pd.read_excel(file_path)
    
    # Convert the DataFrame to HTML with the specified table ID and class for styling
    html_table = df.to_html(index=False, table_id=table_id, classes='stats-table')
    
    # Write to the output HTML file with UTF-8 encoding
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_table)

# Convert each position's stats Excel file to an HTML table
excel_to_html_table("C:/Users/LiLBitch/Downloads/COMM118 PROJECTS/20_time/wr Stats.xlsx", "wr_stats.html", "wr-table")
excel_to_html_table("C:/Users/LiLBitch/Downloads/COMM118 PROJECTS/20_time/te Stats.xlsx", "te_stats.html", "te-table")
excel_to_html_table("C:/Users/LiLBitch/Downloads/COMM118 PROJECTS/20_time/rb stats.xlsx", "rb_stats.html", "rb-table")
excel_to_html_table("C:/Users/LiLBitch/Downloads/COMM118 PROJECTS/20_time/qb stats.xlsx", "qb_stats.html", "qb-table")

