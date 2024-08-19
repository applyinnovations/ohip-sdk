# CommissionPaymentsActivityDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PaymentsActivity** | Pointer to [**[]CommissionPaymentActivityType**](CommissionPaymentActivityType.md) | List of payment activity information | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommissionPaymentsActivityDetails

`func NewCommissionPaymentsActivityDetails() *CommissionPaymentsActivityDetails`

NewCommissionPaymentsActivityDetails instantiates a new CommissionPaymentsActivityDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionPaymentsActivityDetailsWithDefaults

`func NewCommissionPaymentsActivityDetailsWithDefaults() *CommissionPaymentsActivityDetails`

NewCommissionPaymentsActivityDetailsWithDefaults instantiates a new CommissionPaymentsActivityDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CommissionPaymentsActivityDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommissionPaymentsActivityDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommissionPaymentsActivityDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommissionPaymentsActivityDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPaymentsActivity

`func (o *CommissionPaymentsActivityDetails) GetPaymentsActivity() []CommissionPaymentActivityType`

GetPaymentsActivity returns the PaymentsActivity field if non-nil, zero value otherwise.

### GetPaymentsActivityOk

`func (o *CommissionPaymentsActivityDetails) GetPaymentsActivityOk() (*[]CommissionPaymentActivityType, bool)`

GetPaymentsActivityOk returns a tuple with the PaymentsActivity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentsActivity

`func (o *CommissionPaymentsActivityDetails) SetPaymentsActivity(v []CommissionPaymentActivityType)`

SetPaymentsActivity sets PaymentsActivity field to given value.

### HasPaymentsActivity

`func (o *CommissionPaymentsActivityDetails) HasPaymentsActivity() bool`

HasPaymentsActivity returns a boolean if a field has been set.

### GetWarnings

`func (o *CommissionPaymentsActivityDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommissionPaymentsActivityDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommissionPaymentsActivityDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommissionPaymentsActivityDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


