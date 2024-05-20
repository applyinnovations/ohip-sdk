# ChannelHotelLetterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannel** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code which the hotel letters belong to. | [optional] 
**LanguageCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**LetterName** | Pointer to **string** | Name of the letter that associated to Hotel Letter. | [optional] 
**LetterType** | Pointer to [**LetterTypeType**](LetterTypeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelHotelLetterType

`func NewChannelHotelLetterType() *ChannelHotelLetterType`

NewChannelHotelLetterType instantiates a new ChannelHotelLetterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelHotelLetterTypeWithDefaults

`func NewChannelHotelLetterTypeWithDefaults() *ChannelHotelLetterType`

NewChannelHotelLetterTypeWithDefaults instantiates a new ChannelHotelLetterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannel

`func (o *ChannelHotelLetterType) GetBookingChannel() CodeDescriptionType`

GetBookingChannel returns the BookingChannel field if non-nil, zero value otherwise.

### GetBookingChannelOk

`func (o *ChannelHotelLetterType) GetBookingChannelOk() (*CodeDescriptionType, bool)`

GetBookingChannelOk returns a tuple with the BookingChannel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannel

`func (o *ChannelHotelLetterType) SetBookingChannel(v CodeDescriptionType)`

SetBookingChannel sets BookingChannel field to given value.

### HasBookingChannel

`func (o *ChannelHotelLetterType) HasBookingChannel() bool`

HasBookingChannel returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelHotelLetterType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelHotelLetterType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelHotelLetterType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelHotelLetterType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLanguageCode

`func (o *ChannelHotelLetterType) GetLanguageCode() CodeDescriptionType`

GetLanguageCode returns the LanguageCode field if non-nil, zero value otherwise.

### GetLanguageCodeOk

`func (o *ChannelHotelLetterType) GetLanguageCodeOk() (*CodeDescriptionType, bool)`

GetLanguageCodeOk returns a tuple with the LanguageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguageCode

`func (o *ChannelHotelLetterType) SetLanguageCode(v CodeDescriptionType)`

SetLanguageCode sets LanguageCode field to given value.

### HasLanguageCode

`func (o *ChannelHotelLetterType) HasLanguageCode() bool`

HasLanguageCode returns a boolean if a field has been set.

### GetLetterName

`func (o *ChannelHotelLetterType) GetLetterName() string`

GetLetterName returns the LetterName field if non-nil, zero value otherwise.

### GetLetterNameOk

`func (o *ChannelHotelLetterType) GetLetterNameOk() (*string, bool)`

GetLetterNameOk returns a tuple with the LetterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLetterName

`func (o *ChannelHotelLetterType) SetLetterName(v string)`

SetLetterName sets LetterName field to given value.

### HasLetterName

`func (o *ChannelHotelLetterType) HasLetterName() bool`

HasLetterName returns a boolean if a field has been set.

### GetLetterType

`func (o *ChannelHotelLetterType) GetLetterType() LetterTypeType`

GetLetterType returns the LetterType field if non-nil, zero value otherwise.

### GetLetterTypeOk

`func (o *ChannelHotelLetterType) GetLetterTypeOk() (*LetterTypeType, bool)`

GetLetterTypeOk returns a tuple with the LetterType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLetterType

`func (o *ChannelHotelLetterType) SetLetterType(v LetterTypeType)`

SetLetterType sets LetterType field to given value.

### HasLetterType

`func (o *ChannelHotelLetterType) HasLetterType() bool`

HasLetterType returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelHotelLetterType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelHotelLetterType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelHotelLetterType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelHotelLetterType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


