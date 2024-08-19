# ReceiptHistoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReceiptHistory** | Pointer to [**[]ReceiptSummaryType**](ReceiptSummaryType.md) | Receipt History details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReceiptHistoryResponse

`func NewReceiptHistoryResponse() *ReceiptHistoryResponse`

NewReceiptHistoryResponse instantiates a new ReceiptHistoryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReceiptHistoryResponseWithDefaults

`func NewReceiptHistoryResponseWithDefaults() *ReceiptHistoryResponse`

NewReceiptHistoryResponseWithDefaults instantiates a new ReceiptHistoryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReceiptHistoryResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReceiptHistoryResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReceiptHistoryResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReceiptHistoryResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReceiptHistory

`func (o *ReceiptHistoryResponse) GetReceiptHistory() []ReceiptSummaryType`

GetReceiptHistory returns the ReceiptHistory field if non-nil, zero value otherwise.

### GetReceiptHistoryOk

`func (o *ReceiptHistoryResponse) GetReceiptHistoryOk() (*[]ReceiptSummaryType, bool)`

GetReceiptHistoryOk returns a tuple with the ReceiptHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptHistory

`func (o *ReceiptHistoryResponse) SetReceiptHistory(v []ReceiptSummaryType)`

SetReceiptHistory sets ReceiptHistory field to given value.

### HasReceiptHistory

`func (o *ReceiptHistoryResponse) HasReceiptHistory() bool`

HasReceiptHistory returns a boolean if a field has been set.

### GetWarnings

`func (o *ReceiptHistoryResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReceiptHistoryResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReceiptHistoryResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReceiptHistoryResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


