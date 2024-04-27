# ConfirmationDeliveryMethodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to [**EmailDeliveryConfigurationType**](EmailDeliveryConfigurationType.md) |  | [optional] 
**Fax** | Pointer to [**FaxDeliveryConfigurationType**](FaxDeliveryConfigurationType.md) |  | [optional] 
**TextMessage** | Pointer to [**TextMessageDeliveryConfigurationType**](TextMessageDeliveryConfigurationType.md) |  | [optional] 

## Methods

### NewConfirmationDeliveryMethodType

`func NewConfirmationDeliveryMethodType() *ConfirmationDeliveryMethodType`

NewConfirmationDeliveryMethodType instantiates a new ConfirmationDeliveryMethodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfirmationDeliveryMethodTypeWithDefaults

`func NewConfirmationDeliveryMethodTypeWithDefaults() *ConfirmationDeliveryMethodType`

NewConfirmationDeliveryMethodTypeWithDefaults instantiates a new ConfirmationDeliveryMethodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ConfirmationDeliveryMethodType) GetEmail() EmailDeliveryConfigurationType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ConfirmationDeliveryMethodType) GetEmailOk() (*EmailDeliveryConfigurationType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ConfirmationDeliveryMethodType) SetEmail(v EmailDeliveryConfigurationType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ConfirmationDeliveryMethodType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetFax

`func (o *ConfirmationDeliveryMethodType) GetFax() FaxDeliveryConfigurationType`

GetFax returns the Fax field if non-nil, zero value otherwise.

### GetFaxOk

`func (o *ConfirmationDeliveryMethodType) GetFaxOk() (*FaxDeliveryConfigurationType, bool)`

GetFaxOk returns a tuple with the Fax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFax

`func (o *ConfirmationDeliveryMethodType) SetFax(v FaxDeliveryConfigurationType)`

SetFax sets Fax field to given value.

### HasFax

`func (o *ConfirmationDeliveryMethodType) HasFax() bool`

HasFax returns a boolean if a field has been set.

### GetTextMessage

`func (o *ConfirmationDeliveryMethodType) GetTextMessage() TextMessageDeliveryConfigurationType`

GetTextMessage returns the TextMessage field if non-nil, zero value otherwise.

### GetTextMessageOk

`func (o *ConfirmationDeliveryMethodType) GetTextMessageOk() (*TextMessageDeliveryConfigurationType, bool)`

GetTextMessageOk returns a tuple with the TextMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextMessage

`func (o *ConfirmationDeliveryMethodType) SetTextMessage(v TextMessageDeliveryConfigurationType)`

SetTextMessage sets TextMessage field to given value.

### HasTextMessage

`func (o *ConfirmationDeliveryMethodType) HasTextMessage() bool`

HasTextMessage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


