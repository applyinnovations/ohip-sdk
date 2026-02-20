# CancelReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelReservations** | Pointer to [**CancelReservationsType**](CancelReservationsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCancelReservations

`func NewCancelReservations() *CancelReservations`

NewCancelReservations instantiates a new CancelReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelReservationsWithDefaults

`func NewCancelReservationsWithDefaults() *CancelReservations`

NewCancelReservationsWithDefaults instantiates a new CancelReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelReservations

`func (o *CancelReservations) GetCancelReservations() CancelReservationsType`

GetCancelReservations returns the CancelReservations field if non-nil, zero value otherwise.

### GetCancelReservationsOk

`func (o *CancelReservations) GetCancelReservationsOk() (*CancelReservationsType, bool)`

GetCancelReservationsOk returns a tuple with the CancelReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelReservations

`func (o *CancelReservations) SetCancelReservations(v CancelReservationsType)`

SetCancelReservations sets CancelReservations field to given value.

### HasCancelReservations

`func (o *CancelReservations) HasCancelReservations() bool`

HasCancelReservations returns a boolean if a field has been set.

### GetLinks

`func (o *CancelReservations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CancelReservations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CancelReservations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CancelReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CancelReservations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CancelReservations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CancelReservations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CancelReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


