# CreditLimitOveragePaymentsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProcessId** | Pointer to **string** | Used for Character Strings, length 0 to 40. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCreditLimitOveragePaymentsDetails

`func NewCreditLimitOveragePaymentsDetails() *CreditLimitOveragePaymentsDetails`

NewCreditLimitOveragePaymentsDetails instantiates a new CreditLimitOveragePaymentsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditLimitOveragePaymentsDetailsWithDefaults

`func NewCreditLimitOveragePaymentsDetailsWithDefaults() *CreditLimitOveragePaymentsDetails`

NewCreditLimitOveragePaymentsDetailsWithDefaults instantiates a new CreditLimitOveragePaymentsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CreditLimitOveragePaymentsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreditLimitOveragePaymentsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreditLimitOveragePaymentsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreditLimitOveragePaymentsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProcessId

`func (o *CreditLimitOveragePaymentsDetails) GetProcessId() string`

GetProcessId returns the ProcessId field if non-nil, zero value otherwise.

### GetProcessIdOk

`func (o *CreditLimitOveragePaymentsDetails) GetProcessIdOk() (*string, bool)`

GetProcessIdOk returns a tuple with the ProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessId

`func (o *CreditLimitOveragePaymentsDetails) SetProcessId(v string)`

SetProcessId sets ProcessId field to given value.

### HasProcessId

`func (o *CreditLimitOveragePaymentsDetails) HasProcessId() bool`

HasProcessId returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditLimitOveragePaymentsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditLimitOveragePaymentsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditLimitOveragePaymentsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditLimitOveragePaymentsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


