# ExternalProfileSummariesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileInfo** | Pointer to [**[]ExternalProfileSummaryInfoType**](ExternalProfileSummaryInfoType.md) | A collection of Profiles or Unique IDs of Profiles. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 
**Status** | Pointer to [**ExternalStatusType**](ExternalStatusType.md) |  | [optional] 
**HaltOperation** | Pointer to **bool** | Hold/Continue external Profile operation. | [optional] 

## Methods

### NewExternalProfileSummariesType

`func NewExternalProfileSummariesType() *ExternalProfileSummariesType`

NewExternalProfileSummariesType instantiates a new ExternalProfileSummariesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalProfileSummariesTypeWithDefaults

`func NewExternalProfileSummariesTypeWithDefaults() *ExternalProfileSummariesType`

NewExternalProfileSummariesTypeWithDefaults instantiates a new ExternalProfileSummariesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileInfo

`func (o *ExternalProfileSummariesType) GetProfileInfo() []ExternalProfileSummaryInfoType`

GetProfileInfo returns the ProfileInfo field if non-nil, zero value otherwise.

### GetProfileInfoOk

`func (o *ExternalProfileSummariesType) GetProfileInfoOk() (*[]ExternalProfileSummaryInfoType, bool)`

GetProfileInfoOk returns a tuple with the ProfileInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileInfo

`func (o *ExternalProfileSummariesType) SetProfileInfo(v []ExternalProfileSummaryInfoType)`

SetProfileInfo sets ProfileInfo field to given value.

### HasProfileInfo

`func (o *ExternalProfileSummariesType) HasProfileInfo() bool`

HasProfileInfo returns a boolean if a field has been set.

### GetTotalRows

`func (o *ExternalProfileSummariesType) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ExternalProfileSummariesType) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ExternalProfileSummariesType) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ExternalProfileSummariesType) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.

### GetStatus

`func (o *ExternalProfileSummariesType) GetStatus() ExternalStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ExternalProfileSummariesType) GetStatusOk() (*ExternalStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ExternalProfileSummariesType) SetStatus(v ExternalStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ExternalProfileSummariesType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetHaltOperation

`func (o *ExternalProfileSummariesType) GetHaltOperation() bool`

GetHaltOperation returns the HaltOperation field if non-nil, zero value otherwise.

### GetHaltOperationOk

`func (o *ExternalProfileSummariesType) GetHaltOperationOk() (*bool, bool)`

GetHaltOperationOk returns a tuple with the HaltOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHaltOperation

`func (o *ExternalProfileSummariesType) SetHaltOperation(v bool)`

SetHaltOperation sets HaltOperation field to given value.

### HasHaltOperation

`func (o *ExternalProfileSummariesType) HasHaltOperation() bool`

HasHaltOperation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


