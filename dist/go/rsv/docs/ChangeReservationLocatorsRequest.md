# ChangeReservationLocatorsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationLocators** | Pointer to [**[]ReservationLocatorType**](ReservationLocatorType.md) | Holds the Locator Information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeReservationLocatorsRequest

`func NewChangeReservationLocatorsRequest() *ChangeReservationLocatorsRequest`

NewChangeReservationLocatorsRequest instantiates a new ChangeReservationLocatorsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeReservationLocatorsRequestWithDefaults

`func NewChangeReservationLocatorsRequestWithDefaults() *ChangeReservationLocatorsRequest`

NewChangeReservationLocatorsRequestWithDefaults instantiates a new ChangeReservationLocatorsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ChangeReservationLocatorsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeReservationLocatorsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeReservationLocatorsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeReservationLocatorsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeReservationLocatorsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeReservationLocatorsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeReservationLocatorsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeReservationLocatorsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *ChangeReservationLocatorsRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ChangeReservationLocatorsRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ChangeReservationLocatorsRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ChangeReservationLocatorsRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationLocators

`func (o *ChangeReservationLocatorsRequest) GetReservationLocators() []ReservationLocatorType`

GetReservationLocators returns the ReservationLocators field if non-nil, zero value otherwise.

### GetReservationLocatorsOk

`func (o *ChangeReservationLocatorsRequest) GetReservationLocatorsOk() (*[]ReservationLocatorType, bool)`

GetReservationLocatorsOk returns a tuple with the ReservationLocators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationLocators

`func (o *ChangeReservationLocatorsRequest) SetReservationLocators(v []ReservationLocatorType)`

SetReservationLocators sets ReservationLocators field to given value.

### HasReservationLocators

`func (o *ChangeReservationLocatorsRequest) HasReservationLocators() bool`

HasReservationLocators returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeReservationLocatorsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeReservationLocatorsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeReservationLocatorsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeReservationLocatorsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


