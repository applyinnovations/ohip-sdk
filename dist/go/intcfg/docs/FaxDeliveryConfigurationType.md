# FaxDeliveryConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivateEmailToFax** | Pointer to **bool** | This option must be selected in order to activate faxing from an SMTP compliant fax server | [optional] 
**Body** | Pointer to **string** |  | [optional] 
**FaxDomain** | Pointer to **string** |  | [optional] 
**FaxPrefix** | Pointer to **string** |  | [optional] 
**FaxSuffix** | Pointer to **string** |  | [optional] 
**Format** | Pointer to [**EmailDeliveryFormatType**](EmailDeliveryFormatType.md) |  | [optional] 
**FromAddress** | Pointer to **string** |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code | [optional] 
**ServerName** | Pointer to **string** |  | [optional] 
**Subject** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**EmailDeliveryMethodType**](EmailDeliveryMethodType.md) |  | [optional] 
**UserId** | Pointer to **string** |  | [optional] 
**UserPassword** | Pointer to **string** |  | [optional] 

## Methods

### NewFaxDeliveryConfigurationType

`func NewFaxDeliveryConfigurationType() *FaxDeliveryConfigurationType`

NewFaxDeliveryConfigurationType instantiates a new FaxDeliveryConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFaxDeliveryConfigurationTypeWithDefaults

`func NewFaxDeliveryConfigurationTypeWithDefaults() *FaxDeliveryConfigurationType`

NewFaxDeliveryConfigurationTypeWithDefaults instantiates a new FaxDeliveryConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivateEmailToFax

`func (o *FaxDeliveryConfigurationType) GetActivateEmailToFax() bool`

GetActivateEmailToFax returns the ActivateEmailToFax field if non-nil, zero value otherwise.

### GetActivateEmailToFaxOk

`func (o *FaxDeliveryConfigurationType) GetActivateEmailToFaxOk() (*bool, bool)`

GetActivateEmailToFaxOk returns a tuple with the ActivateEmailToFax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivateEmailToFax

`func (o *FaxDeliveryConfigurationType) SetActivateEmailToFax(v bool)`

SetActivateEmailToFax sets ActivateEmailToFax field to given value.

### HasActivateEmailToFax

`func (o *FaxDeliveryConfigurationType) HasActivateEmailToFax() bool`

HasActivateEmailToFax returns a boolean if a field has been set.

### GetBody

`func (o *FaxDeliveryConfigurationType) GetBody() string`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *FaxDeliveryConfigurationType) GetBodyOk() (*string, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *FaxDeliveryConfigurationType) SetBody(v string)`

SetBody sets Body field to given value.

### HasBody

`func (o *FaxDeliveryConfigurationType) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetFaxDomain

`func (o *FaxDeliveryConfigurationType) GetFaxDomain() string`

GetFaxDomain returns the FaxDomain field if non-nil, zero value otherwise.

### GetFaxDomainOk

`func (o *FaxDeliveryConfigurationType) GetFaxDomainOk() (*string, bool)`

GetFaxDomainOk returns a tuple with the FaxDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFaxDomain

`func (o *FaxDeliveryConfigurationType) SetFaxDomain(v string)`

SetFaxDomain sets FaxDomain field to given value.

### HasFaxDomain

`func (o *FaxDeliveryConfigurationType) HasFaxDomain() bool`

HasFaxDomain returns a boolean if a field has been set.

### GetFaxPrefix

`func (o *FaxDeliveryConfigurationType) GetFaxPrefix() string`

GetFaxPrefix returns the FaxPrefix field if non-nil, zero value otherwise.

### GetFaxPrefixOk

`func (o *FaxDeliveryConfigurationType) GetFaxPrefixOk() (*string, bool)`

GetFaxPrefixOk returns a tuple with the FaxPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFaxPrefix

`func (o *FaxDeliveryConfigurationType) SetFaxPrefix(v string)`

SetFaxPrefix sets FaxPrefix field to given value.

### HasFaxPrefix

`func (o *FaxDeliveryConfigurationType) HasFaxPrefix() bool`

HasFaxPrefix returns a boolean if a field has been set.

### GetFaxSuffix

`func (o *FaxDeliveryConfigurationType) GetFaxSuffix() string`

GetFaxSuffix returns the FaxSuffix field if non-nil, zero value otherwise.

### GetFaxSuffixOk

`func (o *FaxDeliveryConfigurationType) GetFaxSuffixOk() (*string, bool)`

GetFaxSuffixOk returns a tuple with the FaxSuffix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFaxSuffix

`func (o *FaxDeliveryConfigurationType) SetFaxSuffix(v string)`

SetFaxSuffix sets FaxSuffix field to given value.

### HasFaxSuffix

`func (o *FaxDeliveryConfigurationType) HasFaxSuffix() bool`

HasFaxSuffix returns a boolean if a field has been set.

### GetFormat

`func (o *FaxDeliveryConfigurationType) GetFormat() EmailDeliveryFormatType`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *FaxDeliveryConfigurationType) GetFormatOk() (*EmailDeliveryFormatType, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *FaxDeliveryConfigurationType) SetFormat(v EmailDeliveryFormatType)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *FaxDeliveryConfigurationType) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetFromAddress

`func (o *FaxDeliveryConfigurationType) GetFromAddress() string`

GetFromAddress returns the FromAddress field if non-nil, zero value otherwise.

### GetFromAddressOk

`func (o *FaxDeliveryConfigurationType) GetFromAddressOk() (*string, bool)`

GetFromAddressOk returns a tuple with the FromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromAddress

`func (o *FaxDeliveryConfigurationType) SetFromAddress(v string)`

SetFromAddress sets FromAddress field to given value.

### HasFromAddress

`func (o *FaxDeliveryConfigurationType) HasFromAddress() bool`

HasFromAddress returns a boolean if a field has been set.

### GetHotelId

`func (o *FaxDeliveryConfigurationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FaxDeliveryConfigurationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FaxDeliveryConfigurationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FaxDeliveryConfigurationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetServerName

`func (o *FaxDeliveryConfigurationType) GetServerName() string`

GetServerName returns the ServerName field if non-nil, zero value otherwise.

### GetServerNameOk

`func (o *FaxDeliveryConfigurationType) GetServerNameOk() (*string, bool)`

GetServerNameOk returns a tuple with the ServerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerName

`func (o *FaxDeliveryConfigurationType) SetServerName(v string)`

SetServerName sets ServerName field to given value.

### HasServerName

`func (o *FaxDeliveryConfigurationType) HasServerName() bool`

HasServerName returns a boolean if a field has been set.

### GetSubject

`func (o *FaxDeliveryConfigurationType) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *FaxDeliveryConfigurationType) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *FaxDeliveryConfigurationType) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *FaxDeliveryConfigurationType) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetType

`func (o *FaxDeliveryConfigurationType) GetType() EmailDeliveryMethodType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FaxDeliveryConfigurationType) GetTypeOk() (*EmailDeliveryMethodType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FaxDeliveryConfigurationType) SetType(v EmailDeliveryMethodType)`

SetType sets Type field to given value.

### HasType

`func (o *FaxDeliveryConfigurationType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUserId

`func (o *FaxDeliveryConfigurationType) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *FaxDeliveryConfigurationType) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *FaxDeliveryConfigurationType) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *FaxDeliveryConfigurationType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserPassword

`func (o *FaxDeliveryConfigurationType) GetUserPassword() string`

GetUserPassword returns the UserPassword field if non-nil, zero value otherwise.

### GetUserPasswordOk

`func (o *FaxDeliveryConfigurationType) GetUserPasswordOk() (*string, bool)`

GetUserPasswordOk returns a tuple with the UserPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserPassword

`func (o *FaxDeliveryConfigurationType) SetUserPassword(v string)`

SetUserPassword sets UserPassword field to given value.

### HasUserPassword

`func (o *FaxDeliveryConfigurationType) HasUserPassword() bool`

HasUserPassword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


