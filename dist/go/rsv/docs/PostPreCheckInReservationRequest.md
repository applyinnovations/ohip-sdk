# PostPreCheckInReservationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservation** | Pointer to [**ReservationPreCheckInDetailsType**](ReservationPreCheckInDetailsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostPreCheckInReservationRequest

`func NewPostPreCheckInReservationRequest() *PostPreCheckInReservationRequest`

NewPostPreCheckInReservationRequest instantiates a new PostPreCheckInReservationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostPreCheckInReservationRequestWithDefaults

`func NewPostPreCheckInReservationRequestWithDefaults() *PostPreCheckInReservationRequest`

NewPostPreCheckInReservationRequestWithDefaults instantiates a new PostPreCheckInReservationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowMobileViewFolio

`func (o *PostPreCheckInReservationRequest) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *PostPreCheckInReservationRequest) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *PostPreCheckInReservationRequest) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *PostPreCheckInReservationRequest) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetLinks

`func (o *PostPreCheckInReservationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostPreCheckInReservationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostPreCheckInReservationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostPreCheckInReservationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservation

`func (o *PostPreCheckInReservationRequest) GetReservation() ReservationPreCheckInDetailsType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *PostPreCheckInReservationRequest) GetReservationOk() (*ReservationPreCheckInDetailsType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *PostPreCheckInReservationRequest) SetReservation(v ReservationPreCheckInDetailsType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *PostPreCheckInReservationRequest) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetWarnings

`func (o *PostPreCheckInReservationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostPreCheckInReservationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostPreCheckInReservationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostPreCheckInReservationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


