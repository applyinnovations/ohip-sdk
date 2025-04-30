# FolioHistoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioHistory** | Pointer to [**[]FolioSummaryType**](FolioSummaryType.md) | Folio History details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioHistoryResponse

`func NewFolioHistoryResponse() *FolioHistoryResponse`

NewFolioHistoryResponse instantiates a new FolioHistoryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioHistoryResponseWithDefaults

`func NewFolioHistoryResponseWithDefaults() *FolioHistoryResponse`

NewFolioHistoryResponseWithDefaults instantiates a new FolioHistoryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioHistory

`func (o *FolioHistoryResponse) GetFolioHistory() []FolioSummaryType`

GetFolioHistory returns the FolioHistory field if non-nil, zero value otherwise.

### GetFolioHistoryOk

`func (o *FolioHistoryResponse) GetFolioHistoryOk() (*[]FolioSummaryType, bool)`

GetFolioHistoryOk returns a tuple with the FolioHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioHistory

`func (o *FolioHistoryResponse) SetFolioHistory(v []FolioSummaryType)`

SetFolioHistory sets FolioHistory field to given value.

### HasFolioHistory

`func (o *FolioHistoryResponse) HasFolioHistory() bool`

HasFolioHistory returns a boolean if a field has been set.

### GetLinks

`func (o *FolioHistoryResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioHistoryResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioHistoryResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioHistoryResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioHistoryResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioHistoryResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioHistoryResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioHistoryResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


