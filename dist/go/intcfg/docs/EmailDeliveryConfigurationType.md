# EmailDeliveryConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FromAddress** | Pointer to **string** |  | [optional] 
**UserId** | Pointer to **string** |  | [optional] 
**UserPassword** | Pointer to **string** |  | [optional] 
**ServerName** | Pointer to **string** |  | [optional] 
**Subject** | Pointer to **string** |  | [optional] 
**Body** | Pointer to **string** |  | [optional] 
**Format** | Pointer to [**EmailDeliveryFormatType**](EmailDeliveryFormatType.md) |  | [optional] 
**Type** | Pointer to [**EmailDeliveryMethodType**](EmailDeliveryMethodType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code | [optional] 
**ActivateDelivery** | Pointer to **bool** | This option must be selected in order to activate emailing from an SMTP compliant email server | [optional] 
**HTMLFormatDelivery** | Pointer to **bool** | Available for Confirmation Letters only and when Activate Email Delivery is selected | [optional] 
**AttachICalender** | Pointer to **bool** |  | [optional] 
**OutboundCode** | Pointer to **string** | Outbound Code | [optional] 

## Methods

### NewEmailDeliveryConfigurationType

`func NewEmailDeliveryConfigurationType() *EmailDeliveryConfigurationType`

NewEmailDeliveryConfigurationType instantiates a new EmailDeliveryConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailDeliveryConfigurationTypeWithDefaults

`func NewEmailDeliveryConfigurationTypeWithDefaults() *EmailDeliveryConfigurationType`

NewEmailDeliveryConfigurationTypeWithDefaults instantiates a new EmailDeliveryConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFromAddress

`func (o *EmailDeliveryConfigurationType) GetFromAddress() string`

GetFromAddress returns the FromAddress field if non-nil, zero value otherwise.

### GetFromAddressOk

`func (o *EmailDeliveryConfigurationType) GetFromAddressOk() (*string, bool)`

GetFromAddressOk returns a tuple with the FromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromAddress

`func (o *EmailDeliveryConfigurationType) SetFromAddress(v string)`

SetFromAddress sets FromAddress field to given value.

### HasFromAddress

`func (o *EmailDeliveryConfigurationType) HasFromAddress() bool`

HasFromAddress returns a boolean if a field has been set.

### GetUserId

`func (o *EmailDeliveryConfigurationType) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *EmailDeliveryConfigurationType) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *EmailDeliveryConfigurationType) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *EmailDeliveryConfigurationType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserPassword

`func (o *EmailDeliveryConfigurationType) GetUserPassword() string`

GetUserPassword returns the UserPassword field if non-nil, zero value otherwise.

### GetUserPasswordOk

`func (o *EmailDeliveryConfigurationType) GetUserPasswordOk() (*string, bool)`

GetUserPasswordOk returns a tuple with the UserPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserPassword

`func (o *EmailDeliveryConfigurationType) SetUserPassword(v string)`

SetUserPassword sets UserPassword field to given value.

### HasUserPassword

`func (o *EmailDeliveryConfigurationType) HasUserPassword() bool`

HasUserPassword returns a boolean if a field has been set.

### GetServerName

`func (o *EmailDeliveryConfigurationType) GetServerName() string`

GetServerName returns the ServerName field if non-nil, zero value otherwise.

### GetServerNameOk

`func (o *EmailDeliveryConfigurationType) GetServerNameOk() (*string, bool)`

GetServerNameOk returns a tuple with the ServerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerName

`func (o *EmailDeliveryConfigurationType) SetServerName(v string)`

SetServerName sets ServerName field to given value.

### HasServerName

`func (o *EmailDeliveryConfigurationType) HasServerName() bool`

HasServerName returns a boolean if a field has been set.

### GetSubject

`func (o *EmailDeliveryConfigurationType) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *EmailDeliveryConfigurationType) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *EmailDeliveryConfigurationType) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *EmailDeliveryConfigurationType) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetBody

`func (o *EmailDeliveryConfigurationType) GetBody() string`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *EmailDeliveryConfigurationType) GetBodyOk() (*string, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *EmailDeliveryConfigurationType) SetBody(v string)`

SetBody sets Body field to given value.

### HasBody

`func (o *EmailDeliveryConfigurationType) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetFormat

`func (o *EmailDeliveryConfigurationType) GetFormat() EmailDeliveryFormatType`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *EmailDeliveryConfigurationType) GetFormatOk() (*EmailDeliveryFormatType, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *EmailDeliveryConfigurationType) SetFormat(v EmailDeliveryFormatType)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *EmailDeliveryConfigurationType) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetType

`func (o *EmailDeliveryConfigurationType) GetType() EmailDeliveryMethodType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EmailDeliveryConfigurationType) GetTypeOk() (*EmailDeliveryMethodType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EmailDeliveryConfigurationType) SetType(v EmailDeliveryMethodType)`

SetType sets Type field to given value.

### HasType

`func (o *EmailDeliveryConfigurationType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetHotelId

`func (o *EmailDeliveryConfigurationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EmailDeliveryConfigurationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EmailDeliveryConfigurationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EmailDeliveryConfigurationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetActivateDelivery

`func (o *EmailDeliveryConfigurationType) GetActivateDelivery() bool`

GetActivateDelivery returns the ActivateDelivery field if non-nil, zero value otherwise.

### GetActivateDeliveryOk

`func (o *EmailDeliveryConfigurationType) GetActivateDeliveryOk() (*bool, bool)`

GetActivateDeliveryOk returns a tuple with the ActivateDelivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivateDelivery

`func (o *EmailDeliveryConfigurationType) SetActivateDelivery(v bool)`

SetActivateDelivery sets ActivateDelivery field to given value.

### HasActivateDelivery

`func (o *EmailDeliveryConfigurationType) HasActivateDelivery() bool`

HasActivateDelivery returns a boolean if a field has been set.

### GetHTMLFormatDelivery

`func (o *EmailDeliveryConfigurationType) GetHTMLFormatDelivery() bool`

GetHTMLFormatDelivery returns the HTMLFormatDelivery field if non-nil, zero value otherwise.

### GetHTMLFormatDeliveryOk

`func (o *EmailDeliveryConfigurationType) GetHTMLFormatDeliveryOk() (*bool, bool)`

GetHTMLFormatDeliveryOk returns a tuple with the HTMLFormatDelivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHTMLFormatDelivery

`func (o *EmailDeliveryConfigurationType) SetHTMLFormatDelivery(v bool)`

SetHTMLFormatDelivery sets HTMLFormatDelivery field to given value.

### HasHTMLFormatDelivery

`func (o *EmailDeliveryConfigurationType) HasHTMLFormatDelivery() bool`

HasHTMLFormatDelivery returns a boolean if a field has been set.

### GetAttachICalender

`func (o *EmailDeliveryConfigurationType) GetAttachICalender() bool`

GetAttachICalender returns the AttachICalender field if non-nil, zero value otherwise.

### GetAttachICalenderOk

`func (o *EmailDeliveryConfigurationType) GetAttachICalenderOk() (*bool, bool)`

GetAttachICalenderOk returns a tuple with the AttachICalender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachICalender

`func (o *EmailDeliveryConfigurationType) SetAttachICalender(v bool)`

SetAttachICalender sets AttachICalender field to given value.

### HasAttachICalender

`func (o *EmailDeliveryConfigurationType) HasAttachICalender() bool`

HasAttachICalender returns a boolean if a field has been set.

### GetOutboundCode

`func (o *EmailDeliveryConfigurationType) GetOutboundCode() string`

GetOutboundCode returns the OutboundCode field if non-nil, zero value otherwise.

### GetOutboundCodeOk

`func (o *EmailDeliveryConfigurationType) GetOutboundCodeOk() (*string, bool)`

GetOutboundCodeOk returns a tuple with the OutboundCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutboundCode

`func (o *EmailDeliveryConfigurationType) SetOutboundCode(v string)`

SetOutboundCode sets OutboundCode field to given value.

### HasOutboundCode

`func (o *EmailDeliveryConfigurationType) HasOutboundCode() bool`

HasOutboundCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


