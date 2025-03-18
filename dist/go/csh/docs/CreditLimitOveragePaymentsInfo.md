# CreditLimitOveragePaymentsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationOveragePayments** | Pointer to [**ReservationOveragePaymentsType**](ReservationOveragePaymentsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreditLimitOveragePaymentsInfo

`func NewCreditLimitOveragePaymentsInfo() *CreditLimitOveragePaymentsInfo`

NewCreditLimitOveragePaymentsInfo instantiates a new CreditLimitOveragePaymentsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditLimitOveragePaymentsInfoWithDefaults

`func NewCreditLimitOveragePaymentsInfoWithDefaults() *CreditLimitOveragePaymentsInfo`

NewCreditLimitOveragePaymentsInfoWithDefaults instantiates a new CreditLimitOveragePaymentsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationOveragePayments

`func (o *CreditLimitOveragePaymentsInfo) GetReservationOveragePayments() ReservationOveragePaymentsType`

GetReservationOveragePayments returns the ReservationOveragePayments field if non-nil, zero value otherwise.

### GetReservationOveragePaymentsOk

`func (o *CreditLimitOveragePaymentsInfo) GetReservationOveragePaymentsOk() (*ReservationOveragePaymentsType, bool)`

GetReservationOveragePaymentsOk returns a tuple with the ReservationOveragePayments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationOveragePayments

`func (o *CreditLimitOveragePaymentsInfo) SetReservationOveragePayments(v ReservationOveragePaymentsType)`

SetReservationOveragePayments sets ReservationOveragePayments field to given value.

### HasReservationOveragePayments

`func (o *CreditLimitOveragePaymentsInfo) HasReservationOveragePayments() bool`

HasReservationOveragePayments returns a boolean if a field has been set.

### GetLinks

`func (o *CreditLimitOveragePaymentsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreditLimitOveragePaymentsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreditLimitOveragePaymentsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreditLimitOveragePaymentsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditLimitOveragePaymentsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditLimitOveragePaymentsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditLimitOveragePaymentsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditLimitOveragePaymentsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


