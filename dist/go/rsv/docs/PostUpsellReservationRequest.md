# PostUpsellReservationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Override** | Pointer to **bool** | Indicates whether to override validation or not. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Upsell** | Pointer to [**UpsellType**](UpsellType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostUpsellReservationRequest

`func NewPostUpsellReservationRequest() *PostUpsellReservationRequest`

NewPostUpsellReservationRequest instantiates a new PostUpsellReservationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostUpsellReservationRequestWithDefaults

`func NewPostUpsellReservationRequestWithDefaults() *PostUpsellReservationRequest`

NewPostUpsellReservationRequestWithDefaults instantiates a new PostUpsellReservationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostUpsellReservationRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostUpsellReservationRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostUpsellReservationRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostUpsellReservationRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PostUpsellReservationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostUpsellReservationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostUpsellReservationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostUpsellReservationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverride

`func (o *PostUpsellReservationRequest) GetOverride() bool`

GetOverride returns the Override field if non-nil, zero value otherwise.

### GetOverrideOk

`func (o *PostUpsellReservationRequest) GetOverrideOk() (*bool, bool)`

GetOverrideOk returns a tuple with the Override field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverride

`func (o *PostUpsellReservationRequest) SetOverride(v bool)`

SetOverride sets Override field to given value.

### HasOverride

`func (o *PostUpsellReservationRequest) HasOverride() bool`

HasOverride returns a boolean if a field has been set.

### GetReservationId

`func (o *PostUpsellReservationRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostUpsellReservationRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostUpsellReservationRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostUpsellReservationRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetUpsell

`func (o *PostUpsellReservationRequest) GetUpsell() UpsellType`

GetUpsell returns the Upsell field if non-nil, zero value otherwise.

### GetUpsellOk

`func (o *PostUpsellReservationRequest) GetUpsellOk() (*UpsellType, bool)`

GetUpsellOk returns a tuple with the Upsell field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsell

`func (o *PostUpsellReservationRequest) SetUpsell(v UpsellType)`

SetUpsell sets Upsell field to given value.

### HasUpsell

`func (o *PostUpsellReservationRequest) HasUpsell() bool`

HasUpsell returns a boolean if a field has been set.

### GetWarnings

`func (o *PostUpsellReservationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostUpsellReservationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostUpsellReservationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostUpsellReservationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


