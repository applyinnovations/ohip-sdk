# ConfirmationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmationStyleInfo** | Pointer to [**ConfirmationStyle**](ConfirmationStyle.md) |  | [optional] 
**DeliveryInfo** | Pointer to [**[]ConfDeliveryInfoType**](ConfDeliveryInfoType.md) | List of confirmation letter delivery methods and their status | [optional] 
**FromEmail** | Pointer to **string** | Senders Email address. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**RecipientInfo** | Pointer to [**ConfRecipientInfoType**](ConfRecipientInfoType.md) |  | [optional] 
**SendTextMessage** | Pointer to **bool** | Flag to indicate sending confirmation letter as text message. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewConfirmationType

`func NewConfirmationType() *ConfirmationType`

NewConfirmationType instantiates a new ConfirmationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfirmationTypeWithDefaults

`func NewConfirmationTypeWithDefaults() *ConfirmationType`

NewConfirmationTypeWithDefaults instantiates a new ConfirmationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfirmationStyleInfo

`func (o *ConfirmationType) GetConfirmationStyleInfo() ConfirmationStyle`

GetConfirmationStyleInfo returns the ConfirmationStyleInfo field if non-nil, zero value otherwise.

### GetConfirmationStyleInfoOk

`func (o *ConfirmationType) GetConfirmationStyleInfoOk() (*ConfirmationStyle, bool)`

GetConfirmationStyleInfoOk returns a tuple with the ConfirmationStyleInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationStyleInfo

`func (o *ConfirmationType) SetConfirmationStyleInfo(v ConfirmationStyle)`

SetConfirmationStyleInfo sets ConfirmationStyleInfo field to given value.

### HasConfirmationStyleInfo

`func (o *ConfirmationType) HasConfirmationStyleInfo() bool`

HasConfirmationStyleInfo returns a boolean if a field has been set.

### GetDeliveryInfo

`func (o *ConfirmationType) GetDeliveryInfo() []ConfDeliveryInfoType`

GetDeliveryInfo returns the DeliveryInfo field if non-nil, zero value otherwise.

### GetDeliveryInfoOk

`func (o *ConfirmationType) GetDeliveryInfoOk() (*[]ConfDeliveryInfoType, bool)`

GetDeliveryInfoOk returns a tuple with the DeliveryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryInfo

`func (o *ConfirmationType) SetDeliveryInfo(v []ConfDeliveryInfoType)`

SetDeliveryInfo sets DeliveryInfo field to given value.

### HasDeliveryInfo

`func (o *ConfirmationType) HasDeliveryInfo() bool`

HasDeliveryInfo returns a boolean if a field has been set.

### GetFromEmail

`func (o *ConfirmationType) GetFromEmail() string`

GetFromEmail returns the FromEmail field if non-nil, zero value otherwise.

### GetFromEmailOk

`func (o *ConfirmationType) GetFromEmailOk() (*string, bool)`

GetFromEmailOk returns a tuple with the FromEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromEmail

`func (o *ConfirmationType) SetFromEmail(v string)`

SetFromEmail sets FromEmail field to given value.

### HasFromEmail

`func (o *ConfirmationType) HasFromEmail() bool`

HasFromEmail returns a boolean if a field has been set.

### GetId

`func (o *ConfirmationType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConfirmationType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConfirmationType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ConfirmationType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *ConfirmationType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ConfirmationType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ConfirmationType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ConfirmationType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *ConfirmationType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ConfirmationType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ConfirmationType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ConfirmationType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *ConfirmationType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ConfirmationType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ConfirmationType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ConfirmationType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetRecipientInfo

`func (o *ConfirmationType) GetRecipientInfo() ConfRecipientInfoType`

GetRecipientInfo returns the RecipientInfo field if non-nil, zero value otherwise.

### GetRecipientInfoOk

`func (o *ConfirmationType) GetRecipientInfoOk() (*ConfRecipientInfoType, bool)`

GetRecipientInfoOk returns a tuple with the RecipientInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientInfo

`func (o *ConfirmationType) SetRecipientInfo(v ConfRecipientInfoType)`

SetRecipientInfo sets RecipientInfo field to given value.

### HasRecipientInfo

`func (o *ConfirmationType) HasRecipientInfo() bool`

HasRecipientInfo returns a boolean if a field has been set.

### GetSendTextMessage

`func (o *ConfirmationType) GetSendTextMessage() bool`

GetSendTextMessage returns the SendTextMessage field if non-nil, zero value otherwise.

### GetSendTextMessageOk

`func (o *ConfirmationType) GetSendTextMessageOk() (*bool, bool)`

GetSendTextMessageOk returns a tuple with the SendTextMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendTextMessage

`func (o *ConfirmationType) SetSendTextMessage(v bool)`

SetSendTextMessage sets SendTextMessage field to given value.

### HasSendTextMessage

`func (o *ConfirmationType) HasSendTextMessage() bool`

HasSendTextMessage returns a boolean if a field has been set.

### GetType

`func (o *ConfirmationType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConfirmationType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConfirmationType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ConfirmationType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *ConfirmationType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ConfirmationType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ConfirmationType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ConfirmationType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


