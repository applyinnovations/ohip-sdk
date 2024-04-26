# BookingChannelInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelCode** | Pointer to **string** |  | [optional] 
**BookingChannelType** | Pointer to **string** |  | [optional] 
**ConfigurationParameters** | Pointer to [**[]ParameterType**](ParameterType.md) | Collection of generic Name-Value-Pair parameters. | [optional] 
**HotelMappings** | Pointer to [**[]HotelMappingType**](HotelMappingType.md) | Hotel Code mapping for the Booking Channel. | [optional] 
**Name** | Pointer to **string** |  | [optional] 

## Methods

### NewBookingChannelInfoType

`func NewBookingChannelInfoType() *BookingChannelInfoType`

NewBookingChannelInfoType instantiates a new BookingChannelInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookingChannelInfoTypeWithDefaults

`func NewBookingChannelInfoTypeWithDefaults() *BookingChannelInfoType`

NewBookingChannelInfoTypeWithDefaults instantiates a new BookingChannelInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelCode

`func (o *BookingChannelInfoType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *BookingChannelInfoType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *BookingChannelInfoType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *BookingChannelInfoType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetBookingChannelType

`func (o *BookingChannelInfoType) GetBookingChannelType() string`

GetBookingChannelType returns the BookingChannelType field if non-nil, zero value otherwise.

### GetBookingChannelTypeOk

`func (o *BookingChannelInfoType) GetBookingChannelTypeOk() (*string, bool)`

GetBookingChannelTypeOk returns a tuple with the BookingChannelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelType

`func (o *BookingChannelInfoType) SetBookingChannelType(v string)`

SetBookingChannelType sets BookingChannelType field to given value.

### HasBookingChannelType

`func (o *BookingChannelInfoType) HasBookingChannelType() bool`

HasBookingChannelType returns a boolean if a field has been set.

### GetConfigurationParameters

`func (o *BookingChannelInfoType) GetConfigurationParameters() []ParameterType`

GetConfigurationParameters returns the ConfigurationParameters field if non-nil, zero value otherwise.

### GetConfigurationParametersOk

`func (o *BookingChannelInfoType) GetConfigurationParametersOk() (*[]ParameterType, bool)`

GetConfigurationParametersOk returns a tuple with the ConfigurationParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigurationParameters

`func (o *BookingChannelInfoType) SetConfigurationParameters(v []ParameterType)`

SetConfigurationParameters sets ConfigurationParameters field to given value.

### HasConfigurationParameters

`func (o *BookingChannelInfoType) HasConfigurationParameters() bool`

HasConfigurationParameters returns a boolean if a field has been set.

### GetHotelMappings

`func (o *BookingChannelInfoType) GetHotelMappings() []HotelMappingType`

GetHotelMappings returns the HotelMappings field if non-nil, zero value otherwise.

### GetHotelMappingsOk

`func (o *BookingChannelInfoType) GetHotelMappingsOk() (*[]HotelMappingType, bool)`

GetHotelMappingsOk returns a tuple with the HotelMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelMappings

`func (o *BookingChannelInfoType) SetHotelMappings(v []HotelMappingType)`

SetHotelMappings sets HotelMappings field to given value.

### HasHotelMappings

`func (o *BookingChannelInfoType) HasHotelMappings() bool`

HasHotelMappings returns a boolean if a field has been set.

### GetName

`func (o *BookingChannelInfoType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BookingChannelInfoType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BookingChannelInfoType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BookingChannelInfoType) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


