# ReservationMethodsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationMethods** | Pointer to [**[]ReservationMethodType**](ReservationMethodType.md) | List of Reservation Methods. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationMethodsCriteria

`func NewReservationMethodsCriteria() *ReservationMethodsCriteria`

NewReservationMethodsCriteria instantiates a new ReservationMethodsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationMethodsCriteriaWithDefaults

`func NewReservationMethodsCriteriaWithDefaults() *ReservationMethodsCriteria`

NewReservationMethodsCriteriaWithDefaults instantiates a new ReservationMethodsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationMethodsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationMethodsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationMethodsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationMethodsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationMethods

`func (o *ReservationMethodsCriteria) GetReservationMethods() []ReservationMethodType`

GetReservationMethods returns the ReservationMethods field if non-nil, zero value otherwise.

### GetReservationMethodsOk

`func (o *ReservationMethodsCriteria) GetReservationMethodsOk() (*[]ReservationMethodType, bool)`

GetReservationMethodsOk returns a tuple with the ReservationMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMethods

`func (o *ReservationMethodsCriteria) SetReservationMethods(v []ReservationMethodType)`

SetReservationMethods sets ReservationMethods field to given value.

### HasReservationMethods

`func (o *ReservationMethodsCriteria) HasReservationMethods() bool`

HasReservationMethods returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationMethodsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationMethodsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationMethodsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationMethodsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


