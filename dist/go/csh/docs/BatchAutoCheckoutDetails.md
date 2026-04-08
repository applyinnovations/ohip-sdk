# BatchAutoCheckoutDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessId** | Pointer to **string** | Used for Character Strings, length 0 to 40. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBatchAutoCheckoutDetails

`func NewBatchAutoCheckoutDetails() *BatchAutoCheckoutDetails`

NewBatchAutoCheckoutDetails instantiates a new BatchAutoCheckoutDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchAutoCheckoutDetailsWithDefaults

`func NewBatchAutoCheckoutDetailsWithDefaults() *BatchAutoCheckoutDetails`

NewBatchAutoCheckoutDetailsWithDefaults instantiates a new BatchAutoCheckoutDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProcessId

`func (o *BatchAutoCheckoutDetails) GetProcessId() string`

GetProcessId returns the ProcessId field if non-nil, zero value otherwise.

### GetProcessIdOk

`func (o *BatchAutoCheckoutDetails) GetProcessIdOk() (*string, bool)`

GetProcessIdOk returns a tuple with the ProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessId

`func (o *BatchAutoCheckoutDetails) SetProcessId(v string)`

SetProcessId sets ProcessId field to given value.

### HasProcessId

`func (o *BatchAutoCheckoutDetails) HasProcessId() bool`

HasProcessId returns a boolean if a field has been set.

### GetLinks

`func (o *BatchAutoCheckoutDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BatchAutoCheckoutDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BatchAutoCheckoutDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BatchAutoCheckoutDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BatchAutoCheckoutDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BatchAutoCheckoutDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BatchAutoCheckoutDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BatchAutoCheckoutDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


