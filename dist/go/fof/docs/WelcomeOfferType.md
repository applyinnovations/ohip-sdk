# WelcomeOfferType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | Determines the status of the welcome offer. | [optional] 
**Type** | Pointer to [**WelcomeOfferOptionsType**](WelcomeOfferOptionsType.md) |  | [optional] 

## Methods

### NewWelcomeOfferType

`func NewWelcomeOfferType() *WelcomeOfferType`

NewWelcomeOfferType instantiates a new WelcomeOfferType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWelcomeOfferTypeWithDefaults

`func NewWelcomeOfferTypeWithDefaults() *WelcomeOfferType`

NewWelcomeOfferTypeWithDefaults instantiates a new WelcomeOfferType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *WelcomeOfferType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WelcomeOfferType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WelcomeOfferType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *WelcomeOfferType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *WelcomeOfferType) GetType() WelcomeOfferOptionsType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WelcomeOfferType) GetTypeOk() (*WelcomeOfferOptionsType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WelcomeOfferType) SetType(v WelcomeOfferOptionsType)`

SetType sets Type field to given value.

### HasType

`func (o *WelcomeOfferType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


