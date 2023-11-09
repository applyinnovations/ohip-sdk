# CancellationHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CxlActivityLog** | Pointer to [**[]CancellationActivityType**](CancellationActivityType.md) | Cancellation Activity information. Refer to Generic common types document. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCancellationHistory

`func NewCancellationHistory() *CancellationHistory`

NewCancellationHistory instantiates a new CancellationHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationHistoryWithDefaults

`func NewCancellationHistoryWithDefaults() *CancellationHistory`

NewCancellationHistoryWithDefaults instantiates a new CancellationHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCxlActivityLog

`func (o *CancellationHistory) GetCxlActivityLog() []CancellationActivityType`

GetCxlActivityLog returns the CxlActivityLog field if non-nil, zero value otherwise.

### GetCxlActivityLogOk

`func (o *CancellationHistory) GetCxlActivityLogOk() (*[]CancellationActivityType, bool)`

GetCxlActivityLogOk returns a tuple with the CxlActivityLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCxlActivityLog

`func (o *CancellationHistory) SetCxlActivityLog(v []CancellationActivityType)`

SetCxlActivityLog sets CxlActivityLog field to given value.

### HasCxlActivityLog

`func (o *CancellationHistory) HasCxlActivityLog() bool`

HasCxlActivityLog returns a boolean if a field has been set.

### GetLinks

`func (o *CancellationHistory) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CancellationHistory) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CancellationHistory) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CancellationHistory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CancellationHistory) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CancellationHistory) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CancellationHistory) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CancellationHistory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


