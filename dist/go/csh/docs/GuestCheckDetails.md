# GuestCheckDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**CheckDetails** | Pointer to [**CheckDetailsType**](CheckDetailsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestCheckDetails

`func NewGuestCheckDetails() *GuestCheckDetails`

NewGuestCheckDetails instantiates a new GuestCheckDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestCheckDetailsWithDefaults

`func NewGuestCheckDetailsWithDefaults() *GuestCheckDetails`

NewGuestCheckDetailsWithDefaults instantiates a new GuestCheckDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *GuestCheckDetails) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *GuestCheckDetails) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *GuestCheckDetails) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *GuestCheckDetails) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetCheckDetails

`func (o *GuestCheckDetails) GetCheckDetails() CheckDetailsType`

GetCheckDetails returns the CheckDetails field if non-nil, zero value otherwise.

### GetCheckDetailsOk

`func (o *GuestCheckDetails) GetCheckDetailsOk() (*CheckDetailsType, bool)`

GetCheckDetailsOk returns a tuple with the CheckDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckDetails

`func (o *GuestCheckDetails) SetCheckDetails(v CheckDetailsType)`

SetCheckDetails sets CheckDetails field to given value.

### HasCheckDetails

`func (o *GuestCheckDetails) HasCheckDetails() bool`

HasCheckDetails returns a boolean if a field has been set.

### GetLinks

`func (o *GuestCheckDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestCheckDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestCheckDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestCheckDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestCheckDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestCheckDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestCheckDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestCheckDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


