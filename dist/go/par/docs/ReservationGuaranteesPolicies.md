# ReservationGuaranteesPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ResGuarantees** | Pointer to [**[]GuaranteePolicyType**](GuaranteePolicyType.md) | Guarantee Code information with cancellation penalty and deposit policy information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationGuaranteesPolicies

`func NewReservationGuaranteesPolicies() *ReservationGuaranteesPolicies`

NewReservationGuaranteesPolicies instantiates a new ReservationGuaranteesPolicies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationGuaranteesPoliciesWithDefaults

`func NewReservationGuaranteesPoliciesWithDefaults() *ReservationGuaranteesPolicies`

NewReservationGuaranteesPoliciesWithDefaults instantiates a new ReservationGuaranteesPolicies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationGuaranteesPolicies) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationGuaranteesPolicies) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationGuaranteesPolicies) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationGuaranteesPolicies) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetResGuarantees

`func (o *ReservationGuaranteesPolicies) GetResGuarantees() []GuaranteePolicyType`

GetResGuarantees returns the ResGuarantees field if non-nil, zero value otherwise.

### GetResGuaranteesOk

`func (o *ReservationGuaranteesPolicies) GetResGuaranteesOk() (*[]GuaranteePolicyType, bool)`

GetResGuaranteesOk returns a tuple with the ResGuarantees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResGuarantees

`func (o *ReservationGuaranteesPolicies) SetResGuarantees(v []GuaranteePolicyType)`

SetResGuarantees sets ResGuarantees field to given value.

### HasResGuarantees

`func (o *ReservationGuaranteesPolicies) HasResGuarantees() bool`

HasResGuarantees returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationGuaranteesPolicies) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationGuaranteesPolicies) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationGuaranteesPolicies) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationGuaranteesPolicies) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


