# CommissionPaymentReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BatchName** | Pointer to **string** | If payment method is EFT, batch name of the payments. | [optional] 
**ExportBlobFile** | Pointer to **string** | If payment method is EFT, Export BLOB file from database in base64 binary format. | [optional] 
**ExportFile** | Pointer to **string** | If payment method is EFT, file location of the file generated. | [optional] 
**ReportId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewCommissionPaymentReportType

`func NewCommissionPaymentReportType() *CommissionPaymentReportType`

NewCommissionPaymentReportType instantiates a new CommissionPaymentReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionPaymentReportTypeWithDefaults

`func NewCommissionPaymentReportTypeWithDefaults() *CommissionPaymentReportType`

NewCommissionPaymentReportTypeWithDefaults instantiates a new CommissionPaymentReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *CommissionPaymentReportType) GetBatchId() UniqueIDType`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *CommissionPaymentReportType) GetBatchIdOk() (*UniqueIDType, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *CommissionPaymentReportType) SetBatchId(v UniqueIDType)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *CommissionPaymentReportType) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetBatchName

`func (o *CommissionPaymentReportType) GetBatchName() string`

GetBatchName returns the BatchName field if non-nil, zero value otherwise.

### GetBatchNameOk

`func (o *CommissionPaymentReportType) GetBatchNameOk() (*string, bool)`

GetBatchNameOk returns a tuple with the BatchName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchName

`func (o *CommissionPaymentReportType) SetBatchName(v string)`

SetBatchName sets BatchName field to given value.

### HasBatchName

`func (o *CommissionPaymentReportType) HasBatchName() bool`

HasBatchName returns a boolean if a field has been set.

### GetExportBlobFile

`func (o *CommissionPaymentReportType) GetExportBlobFile() string`

GetExportBlobFile returns the ExportBlobFile field if non-nil, zero value otherwise.

### GetExportBlobFileOk

`func (o *CommissionPaymentReportType) GetExportBlobFileOk() (*string, bool)`

GetExportBlobFileOk returns a tuple with the ExportBlobFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportBlobFile

`func (o *CommissionPaymentReportType) SetExportBlobFile(v string)`

SetExportBlobFile sets ExportBlobFile field to given value.

### HasExportBlobFile

`func (o *CommissionPaymentReportType) HasExportBlobFile() bool`

HasExportBlobFile returns a boolean if a field has been set.

### GetExportFile

`func (o *CommissionPaymentReportType) GetExportFile() string`

GetExportFile returns the ExportFile field if non-nil, zero value otherwise.

### GetExportFileOk

`func (o *CommissionPaymentReportType) GetExportFileOk() (*string, bool)`

GetExportFileOk returns a tuple with the ExportFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportFile

`func (o *CommissionPaymentReportType) SetExportFile(v string)`

SetExportFile sets ExportFile field to given value.

### HasExportFile

`func (o *CommissionPaymentReportType) HasExportFile() bool`

HasExportFile returns a boolean if a field has been set.

### GetReportId

`func (o *CommissionPaymentReportType) GetReportId() UniqueIDType`

GetReportId returns the ReportId field if non-nil, zero value otherwise.

### GetReportIdOk

`func (o *CommissionPaymentReportType) GetReportIdOk() (*UniqueIDType, bool)`

GetReportIdOk returns a tuple with the ReportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportId

`func (o *CommissionPaymentReportType) SetReportId(v UniqueIDType)`

SetReportId sets ReportId field to given value.

### HasReportId

`func (o *CommissionPaymentReportType) HasReportId() bool`

HasReportId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


