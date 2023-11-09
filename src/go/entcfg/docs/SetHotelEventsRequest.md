# SetHotelEventsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelEvents** | Pointer to [**HotelEventCodesType**](HotelEventCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSetHotelEventsRequest

`func NewSetHotelEventsRequest() *SetHotelEventsRequest`

NewSetHotelEventsRequest instantiates a new SetHotelEventsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetHotelEventsRequestWithDefaults

`func NewSetHotelEventsRequestWithDefaults() *SetHotelEventsRequest`

NewSetHotelEventsRequestWithDefaults instantiates a new SetHotelEventsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelEvents

`func (o *SetHotelEventsRequest) GetHotelEvents() HotelEventCodesType`

GetHotelEvents returns the HotelEvents field if non-nil, zero value otherwise.

### GetHotelEventsOk

`func (o *SetHotelEventsRequest) GetHotelEventsOk() (*HotelEventCodesType, bool)`

GetHotelEventsOk returns a tuple with the HotelEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelEvents

`func (o *SetHotelEventsRequest) SetHotelEvents(v HotelEventCodesType)`

SetHotelEvents sets HotelEvents field to given value.

### HasHotelEvents

`func (o *SetHotelEventsRequest) HasHotelEvents() bool`

HasHotelEvents returns a boolean if a field has been set.

### GetLinks

`func (o *SetHotelEventsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetHotelEventsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetHotelEventsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetHotelEventsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetHotelEventsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetHotelEventsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetHotelEventsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetHotelEventsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


