# TextMessageDeliveryConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | Pointer to **string** | Partner or User ID, Text field for Partner ID or User ID for the delivery provider, Name of the Text Messaging Provider. | [optional] 
**ServerName** | Pointer to **string** | Text field for Service type or email server address for the SMTP. | [optional] 
**Account** | Pointer to **string** | Text field for Service ID or email account for the SMTP as advised by Text Messaging Provider. | [optional] 
**Password** | Pointer to **string** |  | [optional] 
**TimeOut** | Pointer to **int32** | Number field for Delivery time out in seconds for the message. Any message exceeding this limit will be timed out. Add word Seconds using small grey font next to the number box. | [optional] 
**Url** | Pointer to **string** | Text field for URL address or the Text Messaging Provider. | [optional] 
**URLParameter** | Pointer to [**UrlFormatType**](UrlFormatType.md) |  | [optional] 
**Format** | Pointer to **string** | Text field for entering any special formatting for the delivery, or multi select LOV type, for example the one used for Address Format for selection of SID fields, to allow users choosing from a list of tags that may be used to customize this field. | [optional] 
**Message** | Pointer to **string** | Text field for entering the Text Message for delivery. | [optional] 
**Type** | Pointer to [**TextDeliveryMethodType**](TextDeliveryMethodType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code | [optional] 

## Methods

### NewTextMessageDeliveryConfigurationType

`func NewTextMessageDeliveryConfigurationType() *TextMessageDeliveryConfigurationType`

NewTextMessageDeliveryConfigurationType instantiates a new TextMessageDeliveryConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTextMessageDeliveryConfigurationTypeWithDefaults

`func NewTextMessageDeliveryConfigurationTypeWithDefaults() *TextMessageDeliveryConfigurationType`

NewTextMessageDeliveryConfigurationTypeWithDefaults instantiates a new TextMessageDeliveryConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *TextMessageDeliveryConfigurationType) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *TextMessageDeliveryConfigurationType) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *TextMessageDeliveryConfigurationType) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *TextMessageDeliveryConfigurationType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetServerName

`func (o *TextMessageDeliveryConfigurationType) GetServerName() string`

GetServerName returns the ServerName field if non-nil, zero value otherwise.

### GetServerNameOk

`func (o *TextMessageDeliveryConfigurationType) GetServerNameOk() (*string, bool)`

GetServerNameOk returns a tuple with the ServerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerName

`func (o *TextMessageDeliveryConfigurationType) SetServerName(v string)`

SetServerName sets ServerName field to given value.

### HasServerName

`func (o *TextMessageDeliveryConfigurationType) HasServerName() bool`

HasServerName returns a boolean if a field has been set.

### GetAccount

`func (o *TextMessageDeliveryConfigurationType) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *TextMessageDeliveryConfigurationType) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *TextMessageDeliveryConfigurationType) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *TextMessageDeliveryConfigurationType) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetPassword

`func (o *TextMessageDeliveryConfigurationType) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *TextMessageDeliveryConfigurationType) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *TextMessageDeliveryConfigurationType) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *TextMessageDeliveryConfigurationType) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetTimeOut

`func (o *TextMessageDeliveryConfigurationType) GetTimeOut() int32`

GetTimeOut returns the TimeOut field if non-nil, zero value otherwise.

### GetTimeOutOk

`func (o *TextMessageDeliveryConfigurationType) GetTimeOutOk() (*int32, bool)`

GetTimeOutOk returns a tuple with the TimeOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeOut

`func (o *TextMessageDeliveryConfigurationType) SetTimeOut(v int32)`

SetTimeOut sets TimeOut field to given value.

### HasTimeOut

`func (o *TextMessageDeliveryConfigurationType) HasTimeOut() bool`

HasTimeOut returns a boolean if a field has been set.

### GetUrl

`func (o *TextMessageDeliveryConfigurationType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *TextMessageDeliveryConfigurationType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *TextMessageDeliveryConfigurationType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *TextMessageDeliveryConfigurationType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetURLParameter

`func (o *TextMessageDeliveryConfigurationType) GetURLParameter() UrlFormatType`

GetURLParameter returns the URLParameter field if non-nil, zero value otherwise.

### GetURLParameterOk

`func (o *TextMessageDeliveryConfigurationType) GetURLParameterOk() (*UrlFormatType, bool)`

GetURLParameterOk returns a tuple with the URLParameter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLParameter

`func (o *TextMessageDeliveryConfigurationType) SetURLParameter(v UrlFormatType)`

SetURLParameter sets URLParameter field to given value.

### HasURLParameter

`func (o *TextMessageDeliveryConfigurationType) HasURLParameter() bool`

HasURLParameter returns a boolean if a field has been set.

### GetFormat

`func (o *TextMessageDeliveryConfigurationType) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *TextMessageDeliveryConfigurationType) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *TextMessageDeliveryConfigurationType) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *TextMessageDeliveryConfigurationType) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetMessage

`func (o *TextMessageDeliveryConfigurationType) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TextMessageDeliveryConfigurationType) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TextMessageDeliveryConfigurationType) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TextMessageDeliveryConfigurationType) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetType

`func (o *TextMessageDeliveryConfigurationType) GetType() TextDeliveryMethodType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TextMessageDeliveryConfigurationType) GetTypeOk() (*TextDeliveryMethodType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TextMessageDeliveryConfigurationType) SetType(v TextDeliveryMethodType)`

SetType sets Type field to given value.

### HasType

`func (o *TextMessageDeliveryConfigurationType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetHotelId

`func (o *TextMessageDeliveryConfigurationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TextMessageDeliveryConfigurationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TextMessageDeliveryConfigurationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TextMessageDeliveryConfigurationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


