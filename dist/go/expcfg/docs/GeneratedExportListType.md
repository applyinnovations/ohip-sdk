# GeneratedExportListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**ExportDataHeader** | Pointer to [**[]GeneratedExportType**](GeneratedExportType.md) | The list of export instance records. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewGeneratedExportListType

`func NewGeneratedExportListType() *GeneratedExportListType`

NewGeneratedExportListType instantiates a new GeneratedExportListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneratedExportListTypeWithDefaults

`func NewGeneratedExportListTypeWithDefaults() *GeneratedExportListType`

NewGeneratedExportListTypeWithDefaults instantiates a new GeneratedExportListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *GeneratedExportListType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *GeneratedExportListType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *GeneratedExportListType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *GeneratedExportListType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetExportDataHeader

`func (o *GeneratedExportListType) GetExportDataHeader() []GeneratedExportType`

GetExportDataHeader returns the ExportDataHeader field if non-nil, zero value otherwise.

### GetExportDataHeaderOk

`func (o *GeneratedExportListType) GetExportDataHeaderOk() (*[]GeneratedExportType, bool)`

GetExportDataHeaderOk returns a tuple with the ExportDataHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportDataHeader

`func (o *GeneratedExportListType) SetExportDataHeader(v []GeneratedExportType)`

SetExportDataHeader sets ExportDataHeader field to given value.

### HasExportDataHeader

`func (o *GeneratedExportListType) HasExportDataHeader() bool`

HasExportDataHeader returns a boolean if a field has been set.

### GetHasMore

`func (o *GeneratedExportListType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *GeneratedExportListType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *GeneratedExportListType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *GeneratedExportListType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *GeneratedExportListType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *GeneratedExportListType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *GeneratedExportListType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *GeneratedExportListType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


