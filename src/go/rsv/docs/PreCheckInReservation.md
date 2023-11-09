# PreCheckInReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservation** | Pointer to [**ReservationPreCheckInDetailsType**](ReservationPreCheckInDetailsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPreCheckInReservation

`func NewPreCheckInReservation() *PreCheckInReservation`

NewPreCheckInReservation instantiates a new PreCheckInReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreCheckInReservationWithDefaults

`func NewPreCheckInReservationWithDefaults() *PreCheckInReservation`

NewPreCheckInReservationWithDefaults instantiates a new PreCheckInReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowMobileViewFolio

`func (o *PreCheckInReservation) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *PreCheckInReservation) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *PreCheckInReservation) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *PreCheckInReservation) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetLinks

`func (o *PreCheckInReservation) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PreCheckInReservation) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PreCheckInReservation) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PreCheckInReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservation

`func (o *PreCheckInReservation) GetReservation() ReservationPreCheckInDetailsType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *PreCheckInReservation) GetReservationOk() (*ReservationPreCheckInDetailsType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *PreCheckInReservation) SetReservation(v ReservationPreCheckInDetailsType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *PreCheckInReservation) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetWarnings

`func (o *PreCheckInReservation) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PreCheckInReservation) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PreCheckInReservation) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PreCheckInReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


