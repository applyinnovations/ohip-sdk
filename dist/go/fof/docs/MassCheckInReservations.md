# MassCheckInReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**MassCheckInCriteriaType**](MassCheckInCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMassCheckInReservations

`func NewMassCheckInReservations() *MassCheckInReservations`

NewMassCheckInReservations instantiates a new MassCheckInReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassCheckInReservationsWithDefaults

`func NewMassCheckInReservationsWithDefaults() *MassCheckInReservations`

NewMassCheckInReservationsWithDefaults instantiates a new MassCheckInReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *MassCheckInReservations) GetCriteria() MassCheckInCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *MassCheckInReservations) GetCriteriaOk() (*MassCheckInCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *MassCheckInReservations) SetCriteria(v MassCheckInCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *MassCheckInReservations) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *MassCheckInReservations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MassCheckInReservations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MassCheckInReservations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MassCheckInReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MassCheckInReservations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MassCheckInReservations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MassCheckInReservations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MassCheckInReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


