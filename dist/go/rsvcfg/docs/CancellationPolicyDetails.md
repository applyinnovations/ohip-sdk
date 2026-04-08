# CancellationPolicyDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelPenalties** | Pointer to [**CancellationPolicyDetailsCancelPenalties**](CancellationPolicyDetailsCancelPenalties.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCancellationPolicyDetails

`func NewCancellationPolicyDetails() *CancellationPolicyDetails`

NewCancellationPolicyDetails instantiates a new CancellationPolicyDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationPolicyDetailsWithDefaults

`func NewCancellationPolicyDetailsWithDefaults() *CancellationPolicyDetails`

NewCancellationPolicyDetailsWithDefaults instantiates a new CancellationPolicyDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelPenalties

`func (o *CancellationPolicyDetails) GetCancelPenalties() CancellationPolicyDetailsCancelPenalties`

GetCancelPenalties returns the CancelPenalties field if non-nil, zero value otherwise.

### GetCancelPenaltiesOk

`func (o *CancellationPolicyDetails) GetCancelPenaltiesOk() (*CancellationPolicyDetailsCancelPenalties, bool)`

GetCancelPenaltiesOk returns a tuple with the CancelPenalties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalties

`func (o *CancellationPolicyDetails) SetCancelPenalties(v CancellationPolicyDetailsCancelPenalties)`

SetCancelPenalties sets CancelPenalties field to given value.

### HasCancelPenalties

`func (o *CancellationPolicyDetails) HasCancelPenalties() bool`

HasCancelPenalties returns a boolean if a field has been set.

### GetLinks

`func (o *CancellationPolicyDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CancellationPolicyDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CancellationPolicyDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CancellationPolicyDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CancellationPolicyDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CancellationPolicyDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CancellationPolicyDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CancellationPolicyDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


