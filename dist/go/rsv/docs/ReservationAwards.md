# ReservationAwards

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationAwards** | Pointer to [**[]AwardType**](AwardType.md) | List of awards. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationAwards

`func NewReservationAwards() *ReservationAwards`

NewReservationAwards instantiates a new ReservationAwards object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAwardsWithDefaults

`func NewReservationAwardsWithDefaults() *ReservationAwards`

NewReservationAwardsWithDefaults instantiates a new ReservationAwards object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationAwards) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationAwards) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationAwards) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationAwards) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationAwards

`func (o *ReservationAwards) GetReservationAwards() []AwardType`

GetReservationAwards returns the ReservationAwards field if non-nil, zero value otherwise.

### GetReservationAwardsOk

`func (o *ReservationAwards) GetReservationAwardsOk() (*[]AwardType, bool)`

GetReservationAwardsOk returns a tuple with the ReservationAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationAwards

`func (o *ReservationAwards) SetReservationAwards(v []AwardType)`

SetReservationAwards sets ReservationAwards field to given value.

### HasReservationAwards

`func (o *ReservationAwards) HasReservationAwards() bool`

HasReservationAwards returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationAwards) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationAwards) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationAwards) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationAwards) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


