# HotelAirportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AirportCode** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** | Description of the airport | [optional] 
**Direction** | Pointer to **string** | Directions from the airport to the Hotel. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**RelativePosition** | Pointer to [**RelativePositionType**](RelativePositionType.md) |  | [optional] 
**TransportationList** | Pointer to [**TransportationCodeListType**](TransportationCodeListType.md) |  | [optional] 

## Methods

### NewHotelAirportType

`func NewHotelAirportType() *HotelAirportType`

NewHotelAirportType instantiates a new HotelAirportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelAirportTypeWithDefaults

`func NewHotelAirportTypeWithDefaults() *HotelAirportType`

NewHotelAirportTypeWithDefaults instantiates a new HotelAirportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAirportCode

`func (o *HotelAirportType) GetAirportCode() string`

GetAirportCode returns the AirportCode field if non-nil, zero value otherwise.

### GetAirportCodeOk

`func (o *HotelAirportType) GetAirportCodeOk() (*string, bool)`

GetAirportCodeOk returns a tuple with the AirportCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAirportCode

`func (o *HotelAirportType) SetAirportCode(v string)`

SetAirportCode sets AirportCode field to given value.

### HasAirportCode

`func (o *HotelAirportType) HasAirportCode() bool`

HasAirportCode returns a boolean if a field has been set.

### GetDescription

`func (o *HotelAirportType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelAirportType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelAirportType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelAirportType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDirection

`func (o *HotelAirportType) GetDirection() string`

GetDirection returns the Direction field if non-nil, zero value otherwise.

### GetDirectionOk

`func (o *HotelAirportType) GetDirectionOk() (*string, bool)`

GetDirectionOk returns a tuple with the Direction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirection

`func (o *HotelAirportType) SetDirection(v string)`

SetDirection sets Direction field to given value.

### HasDirection

`func (o *HotelAirportType) HasDirection() bool`

HasDirection returns a boolean if a field has been set.

### GetOrderSequence

`func (o *HotelAirportType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *HotelAirportType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *HotelAirportType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *HotelAirportType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetRelativePosition

`func (o *HotelAirportType) GetRelativePosition() RelativePositionType`

GetRelativePosition returns the RelativePosition field if non-nil, zero value otherwise.

### GetRelativePositionOk

`func (o *HotelAirportType) GetRelativePositionOk() (*RelativePositionType, bool)`

GetRelativePositionOk returns a tuple with the RelativePosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelativePosition

`func (o *HotelAirportType) SetRelativePosition(v RelativePositionType)`

SetRelativePosition sets RelativePosition field to given value.

### HasRelativePosition

`func (o *HotelAirportType) HasRelativePosition() bool`

HasRelativePosition returns a boolean if a field has been set.

### GetTransportationList

`func (o *HotelAirportType) GetTransportationList() TransportationCodeListType`

GetTransportationList returns the TransportationList field if non-nil, zero value otherwise.

### GetTransportationListOk

`func (o *HotelAirportType) GetTransportationListOk() (*TransportationCodeListType, bool)`

GetTransportationListOk returns a tuple with the TransportationList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationList

`func (o *HotelAirportType) SetTransportationList(v TransportationCodeListType)`

SetTransportationList sets TransportationList field to given value.

### HasTransportationList

`func (o *HotelAirportType) HasTransportationList() bool`

HasTransportationList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


