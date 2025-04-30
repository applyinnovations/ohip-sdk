# PublishRatePlanType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Channel** | Pointer to **string** | The target channel to send the updated rate information to the external channel. | [optional] 
**HotelId** | Pointer to **string** | The source Property to send the updated rate information to the external channel. | [optional] 
**BeginDate** | Pointer to **string** | Date from which rate code will be effective on the channel. | [optional] 
**EndDate** | Pointer to **string** | Date on which rate code will cease to be effective. | [optional] 
**ChannelCodes** | Pointer to [**PublishRatePlanTypeChannelCodes**](PublishRatePlanTypeChannelCodes.md) |  | [optional] 
**HotelCodes** | Pointer to [**PublishRatePlanTypeHotelCodes**](PublishRatePlanTypeHotelCodes.md) |  | [optional] 

## Methods

### NewPublishRatePlanType

`func NewPublishRatePlanType() *PublishRatePlanType`

NewPublishRatePlanType instantiates a new PublishRatePlanType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublishRatePlanTypeWithDefaults

`func NewPublishRatePlanTypeWithDefaults() *PublishRatePlanType`

NewPublishRatePlanTypeWithDefaults instantiates a new PublishRatePlanType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannel

`func (o *PublishRatePlanType) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *PublishRatePlanType) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *PublishRatePlanType) SetChannel(v string)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *PublishRatePlanType) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### GetHotelId

`func (o *PublishRatePlanType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PublishRatePlanType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PublishRatePlanType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PublishRatePlanType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBeginDate

`func (o *PublishRatePlanType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *PublishRatePlanType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *PublishRatePlanType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *PublishRatePlanType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *PublishRatePlanType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *PublishRatePlanType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *PublishRatePlanType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *PublishRatePlanType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetChannelCodes

`func (o *PublishRatePlanType) GetChannelCodes() PublishRatePlanTypeChannelCodes`

GetChannelCodes returns the ChannelCodes field if non-nil, zero value otherwise.

### GetChannelCodesOk

`func (o *PublishRatePlanType) GetChannelCodesOk() (*PublishRatePlanTypeChannelCodes, bool)`

GetChannelCodesOk returns a tuple with the ChannelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCodes

`func (o *PublishRatePlanType) SetChannelCodes(v PublishRatePlanTypeChannelCodes)`

SetChannelCodes sets ChannelCodes field to given value.

### HasChannelCodes

`func (o *PublishRatePlanType) HasChannelCodes() bool`

HasChannelCodes returns a boolean if a field has been set.

### GetHotelCodes

`func (o *PublishRatePlanType) GetHotelCodes() PublishRatePlanTypeHotelCodes`

GetHotelCodes returns the HotelCodes field if non-nil, zero value otherwise.

### GetHotelCodesOk

`func (o *PublishRatePlanType) GetHotelCodesOk() (*PublishRatePlanTypeHotelCodes, bool)`

GetHotelCodesOk returns a tuple with the HotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodes

`func (o *PublishRatePlanType) SetHotelCodes(v PublishRatePlanTypeHotelCodes)`

SetHotelCodes sets HotelCodes field to given value.

### HasHotelCodes

`func (o *PublishRatePlanType) HasHotelCodes() bool`

HasHotelCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


