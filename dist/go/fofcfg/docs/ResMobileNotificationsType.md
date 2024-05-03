# ResMobileNotificationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckoutMessageReceived** | Pointer to **bool** | Indicates if the Mobile checkout message is received. | [optional] 
**ErrorMessage** | Pointer to **string** | Error message when Mobile Notification has failed. | [optional] 
**KeyReady** | Pointer to [**CommunicationStatusType**](CommunicationStatusType.md) |  | [optional] 
**RequiresAction** | Pointer to **bool** | Indicates if user action is required. The action could be for sending Room Ready or Key Ready Notification. It could also be for initiating Checkout | [optional] 
**RoomReady** | Pointer to [**CommunicationStatusType**](CommunicationStatusType.md) |  | [optional] 

## Methods

### NewResMobileNotificationsType

`func NewResMobileNotificationsType() *ResMobileNotificationsType`

NewResMobileNotificationsType instantiates a new ResMobileNotificationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResMobileNotificationsTypeWithDefaults

`func NewResMobileNotificationsTypeWithDefaults() *ResMobileNotificationsType`

NewResMobileNotificationsTypeWithDefaults instantiates a new ResMobileNotificationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckoutMessageReceived

`func (o *ResMobileNotificationsType) GetCheckoutMessageReceived() bool`

GetCheckoutMessageReceived returns the CheckoutMessageReceived field if non-nil, zero value otherwise.

### GetCheckoutMessageReceivedOk

`func (o *ResMobileNotificationsType) GetCheckoutMessageReceivedOk() (*bool, bool)`

GetCheckoutMessageReceivedOk returns a tuple with the CheckoutMessageReceived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckoutMessageReceived

`func (o *ResMobileNotificationsType) SetCheckoutMessageReceived(v bool)`

SetCheckoutMessageReceived sets CheckoutMessageReceived field to given value.

### HasCheckoutMessageReceived

`func (o *ResMobileNotificationsType) HasCheckoutMessageReceived() bool`

HasCheckoutMessageReceived returns a boolean if a field has been set.

### GetErrorMessage

`func (o *ResMobileNotificationsType) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *ResMobileNotificationsType) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *ResMobileNotificationsType) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *ResMobileNotificationsType) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetKeyReady

`func (o *ResMobileNotificationsType) GetKeyReady() CommunicationStatusType`

GetKeyReady returns the KeyReady field if non-nil, zero value otherwise.

### GetKeyReadyOk

`func (o *ResMobileNotificationsType) GetKeyReadyOk() (*CommunicationStatusType, bool)`

GetKeyReadyOk returns a tuple with the KeyReady field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyReady

`func (o *ResMobileNotificationsType) SetKeyReady(v CommunicationStatusType)`

SetKeyReady sets KeyReady field to given value.

### HasKeyReady

`func (o *ResMobileNotificationsType) HasKeyReady() bool`

HasKeyReady returns a boolean if a field has been set.

### GetRequiresAction

`func (o *ResMobileNotificationsType) GetRequiresAction() bool`

GetRequiresAction returns the RequiresAction field if non-nil, zero value otherwise.

### GetRequiresActionOk

`func (o *ResMobileNotificationsType) GetRequiresActionOk() (*bool, bool)`

GetRequiresActionOk returns a tuple with the RequiresAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiresAction

`func (o *ResMobileNotificationsType) SetRequiresAction(v bool)`

SetRequiresAction sets RequiresAction field to given value.

### HasRequiresAction

`func (o *ResMobileNotificationsType) HasRequiresAction() bool`

HasRequiresAction returns a boolean if a field has been set.

### GetRoomReady

`func (o *ResMobileNotificationsType) GetRoomReady() CommunicationStatusType`

GetRoomReady returns the RoomReady field if non-nil, zero value otherwise.

### GetRoomReadyOk

`func (o *ResMobileNotificationsType) GetRoomReadyOk() (*CommunicationStatusType, bool)`

GetRoomReadyOk returns a tuple with the RoomReady field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomReady

`func (o *ResMobileNotificationsType) SetRoomReady(v CommunicationStatusType)`

SetRoomReady sets RoomReady field to given value.

### HasRoomReady

`func (o *ResMobileNotificationsType) HasRoomReady() bool`

HasRoomReady returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


