# GlobalAlertType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertCode** | Pointer to **string** |  | [optional] 
**AlertId** | Pointer to **float32** |  | [optional] 
**Area** | Pointer to **string** |  | [optional] 
**Conditions** | Pointer to [**ConditionGroupType**](ConditionGroupType.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**Notifications** | Pointer to [**NotificationType**](NotificationType.md) |  | [optional] 
**QueryId** | Pointer to **float32** |  | [optional] 
**StopCheckInCheckOut** | Pointer to **bool** | Indicates the Reservation Stop Check In/Check Out Global Alert. | [optional] 
**WelcomeOffer** | Pointer to **bool** | Determines the Global Alert is a Welcome Offer Alert or not. | [optional] 

## Methods

### NewGlobalAlertType

`func NewGlobalAlertType() *GlobalAlertType`

NewGlobalAlertType instantiates a new GlobalAlertType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGlobalAlertTypeWithDefaults

`func NewGlobalAlertTypeWithDefaults() *GlobalAlertType`

NewGlobalAlertTypeWithDefaults instantiates a new GlobalAlertType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertCode

`func (o *GlobalAlertType) GetAlertCode() string`

GetAlertCode returns the AlertCode field if non-nil, zero value otherwise.

### GetAlertCodeOk

`func (o *GlobalAlertType) GetAlertCodeOk() (*string, bool)`

GetAlertCodeOk returns a tuple with the AlertCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCode

`func (o *GlobalAlertType) SetAlertCode(v string)`

SetAlertCode sets AlertCode field to given value.

### HasAlertCode

`func (o *GlobalAlertType) HasAlertCode() bool`

HasAlertCode returns a boolean if a field has been set.

### GetAlertId

`func (o *GlobalAlertType) GetAlertId() float32`

GetAlertId returns the AlertId field if non-nil, zero value otherwise.

### GetAlertIdOk

`func (o *GlobalAlertType) GetAlertIdOk() (*float32, bool)`

GetAlertIdOk returns a tuple with the AlertId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertId

`func (o *GlobalAlertType) SetAlertId(v float32)`

SetAlertId sets AlertId field to given value.

### HasAlertId

`func (o *GlobalAlertType) HasAlertId() bool`

HasAlertId returns a boolean if a field has been set.

### GetArea

`func (o *GlobalAlertType) GetArea() string`

GetArea returns the Area field if non-nil, zero value otherwise.

### GetAreaOk

`func (o *GlobalAlertType) GetAreaOk() (*string, bool)`

GetAreaOk returns a tuple with the Area field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArea

`func (o *GlobalAlertType) SetArea(v string)`

SetArea sets Area field to given value.

### HasArea

`func (o *GlobalAlertType) HasArea() bool`

HasArea returns a boolean if a field has been set.

### GetConditions

`func (o *GlobalAlertType) GetConditions() ConditionGroupType`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *GlobalAlertType) GetConditionsOk() (*ConditionGroupType, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *GlobalAlertType) SetConditions(v ConditionGroupType)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *GlobalAlertType) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetDescription

`func (o *GlobalAlertType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GlobalAlertType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GlobalAlertType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GlobalAlertType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *GlobalAlertType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *GlobalAlertType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *GlobalAlertType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *GlobalAlertType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNotifications

`func (o *GlobalAlertType) GetNotifications() NotificationType`

GetNotifications returns the Notifications field if non-nil, zero value otherwise.

### GetNotificationsOk

`func (o *GlobalAlertType) GetNotificationsOk() (*NotificationType, bool)`

GetNotificationsOk returns a tuple with the Notifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifications

`func (o *GlobalAlertType) SetNotifications(v NotificationType)`

SetNotifications sets Notifications field to given value.

### HasNotifications

`func (o *GlobalAlertType) HasNotifications() bool`

HasNotifications returns a boolean if a field has been set.

### GetQueryId

`func (o *GlobalAlertType) GetQueryId() float32`

GetQueryId returns the QueryId field if non-nil, zero value otherwise.

### GetQueryIdOk

`func (o *GlobalAlertType) GetQueryIdOk() (*float32, bool)`

GetQueryIdOk returns a tuple with the QueryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryId

`func (o *GlobalAlertType) SetQueryId(v float32)`

SetQueryId sets QueryId field to given value.

### HasQueryId

`func (o *GlobalAlertType) HasQueryId() bool`

HasQueryId returns a boolean if a field has been set.

### GetStopCheckInCheckOut

`func (o *GlobalAlertType) GetStopCheckInCheckOut() bool`

GetStopCheckInCheckOut returns the StopCheckInCheckOut field if non-nil, zero value otherwise.

### GetStopCheckInCheckOutOk

`func (o *GlobalAlertType) GetStopCheckInCheckOutOk() (*bool, bool)`

GetStopCheckInCheckOutOk returns a tuple with the StopCheckInCheckOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStopCheckInCheckOut

`func (o *GlobalAlertType) SetStopCheckInCheckOut(v bool)`

SetStopCheckInCheckOut sets StopCheckInCheckOut field to given value.

### HasStopCheckInCheckOut

`func (o *GlobalAlertType) HasStopCheckInCheckOut() bool`

HasStopCheckInCheckOut returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *GlobalAlertType) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *GlobalAlertType) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *GlobalAlertType) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *GlobalAlertType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


