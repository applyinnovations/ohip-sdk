# UpsellReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Upsell** | Pointer to [**UpsellType**](UpsellType.md) |  | [optional] 
**Override** | Pointer to **bool** | Indicates whether to override validation or not. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUpsellReservation

`func NewUpsellReservation() *UpsellReservation`

NewUpsellReservation instantiates a new UpsellReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellReservationWithDefaults

`func NewUpsellReservationWithDefaults() *UpsellReservation`

NewUpsellReservationWithDefaults instantiates a new UpsellReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *UpsellReservation) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *UpsellReservation) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *UpsellReservation) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *UpsellReservation) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *UpsellReservation) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *UpsellReservation) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *UpsellReservation) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *UpsellReservation) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetUpsell

`func (o *UpsellReservation) GetUpsell() UpsellType`

GetUpsell returns the Upsell field if non-nil, zero value otherwise.

### GetUpsellOk

`func (o *UpsellReservation) GetUpsellOk() (*UpsellType, bool)`

GetUpsellOk returns a tuple with the Upsell field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsell

`func (o *UpsellReservation) SetUpsell(v UpsellType)`

SetUpsell sets Upsell field to given value.

### HasUpsell

`func (o *UpsellReservation) HasUpsell() bool`

HasUpsell returns a boolean if a field has been set.

### GetOverride

`func (o *UpsellReservation) GetOverride() bool`

GetOverride returns the Override field if non-nil, zero value otherwise.

### GetOverrideOk

`func (o *UpsellReservation) GetOverrideOk() (*bool, bool)`

GetOverrideOk returns a tuple with the Override field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverride

`func (o *UpsellReservation) SetOverride(v bool)`

SetOverride sets Override field to given value.

### HasOverride

`func (o *UpsellReservation) HasOverride() bool`

HasOverride returns a boolean if a field has been set.

### GetLinks

`func (o *UpsellReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UpsellReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UpsellReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UpsellReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UpsellReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UpsellReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UpsellReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UpsellReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


