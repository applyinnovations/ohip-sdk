# UserSessionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessDate** | Pointer to **string** |  | [optional] 
**CROCountryCode** | Pointer to **string** |  | [optional] 
**Chain** | Pointer to **string** |  | [optional] 
**Cro** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Hotel** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Parameters** | Pointer to [**ParametersType**](ParametersType.md) |  | [optional] 
**RunningApp** | Pointer to **string** |  | [optional] 
**SessionDefaults** | Pointer to [**UserSessionDefaultsType**](UserSessionDefaultsType.md) |  | [optional] 
**ShareProfiles** | Pointer to **bool** |  | [optional] 
**SystemDate** | Pointer to **string** |  | [optional] 
**Terminal** | Pointer to **string** |  | [optional] 

## Methods

### NewUserSessionInfoType

`func NewUserSessionInfoType() *UserSessionInfoType`

NewUserSessionInfoType instantiates a new UserSessionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserSessionInfoTypeWithDefaults

`func NewUserSessionInfoTypeWithDefaults() *UserSessionInfoType`

NewUserSessionInfoTypeWithDefaults instantiates a new UserSessionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessDate

`func (o *UserSessionInfoType) GetBusinessDate() string`

GetBusinessDate returns the BusinessDate field if non-nil, zero value otherwise.

### GetBusinessDateOk

`func (o *UserSessionInfoType) GetBusinessDateOk() (*string, bool)`

GetBusinessDateOk returns a tuple with the BusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessDate

`func (o *UserSessionInfoType) SetBusinessDate(v string)`

SetBusinessDate sets BusinessDate field to given value.

### HasBusinessDate

`func (o *UserSessionInfoType) HasBusinessDate() bool`

HasBusinessDate returns a boolean if a field has been set.

### GetCROCountryCode

`func (o *UserSessionInfoType) GetCROCountryCode() string`

GetCROCountryCode returns the CROCountryCode field if non-nil, zero value otherwise.

### GetCROCountryCodeOk

`func (o *UserSessionInfoType) GetCROCountryCodeOk() (*string, bool)`

GetCROCountryCodeOk returns a tuple with the CROCountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCROCountryCode

`func (o *UserSessionInfoType) SetCROCountryCode(v string)`

SetCROCountryCode sets CROCountryCode field to given value.

### HasCROCountryCode

`func (o *UserSessionInfoType) HasCROCountryCode() bool`

HasCROCountryCode returns a boolean if a field has been set.

### GetChain

`func (o *UserSessionInfoType) GetChain() string`

GetChain returns the Chain field if non-nil, zero value otherwise.

### GetChainOk

`func (o *UserSessionInfoType) GetChainOk() (*string, bool)`

GetChainOk returns a tuple with the Chain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChain

`func (o *UserSessionInfoType) SetChain(v string)`

SetChain sets Chain field to given value.

### HasChain

`func (o *UserSessionInfoType) HasChain() bool`

HasChain returns a boolean if a field has been set.

### GetCro

`func (o *UserSessionInfoType) GetCro() CodeDescriptionType`

GetCro returns the Cro field if non-nil, zero value otherwise.

### GetCroOk

`func (o *UserSessionInfoType) GetCroOk() (*CodeDescriptionType, bool)`

GetCroOk returns a tuple with the Cro field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCro

`func (o *UserSessionInfoType) SetCro(v CodeDescriptionType)`

SetCro sets Cro field to given value.

### HasCro

`func (o *UserSessionInfoType) HasCro() bool`

HasCro returns a boolean if a field has been set.

### GetHotel

`func (o *UserSessionInfoType) GetHotel() CodeDescriptionType`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *UserSessionInfoType) GetHotelOk() (*CodeDescriptionType, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *UserSessionInfoType) SetHotel(v CodeDescriptionType)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *UserSessionInfoType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetParameters

`func (o *UserSessionInfoType) GetParameters() ParametersType`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *UserSessionInfoType) GetParametersOk() (*ParametersType, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *UserSessionInfoType) SetParameters(v ParametersType)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *UserSessionInfoType) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetRunningApp

`func (o *UserSessionInfoType) GetRunningApp() string`

GetRunningApp returns the RunningApp field if non-nil, zero value otherwise.

### GetRunningAppOk

`func (o *UserSessionInfoType) GetRunningAppOk() (*string, bool)`

GetRunningAppOk returns a tuple with the RunningApp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunningApp

`func (o *UserSessionInfoType) SetRunningApp(v string)`

SetRunningApp sets RunningApp field to given value.

### HasRunningApp

`func (o *UserSessionInfoType) HasRunningApp() bool`

HasRunningApp returns a boolean if a field has been set.

### GetSessionDefaults

`func (o *UserSessionInfoType) GetSessionDefaults() UserSessionDefaultsType`

GetSessionDefaults returns the SessionDefaults field if non-nil, zero value otherwise.

### GetSessionDefaultsOk

`func (o *UserSessionInfoType) GetSessionDefaultsOk() (*UserSessionDefaultsType, bool)`

GetSessionDefaultsOk returns a tuple with the SessionDefaults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSessionDefaults

`func (o *UserSessionInfoType) SetSessionDefaults(v UserSessionDefaultsType)`

SetSessionDefaults sets SessionDefaults field to given value.

### HasSessionDefaults

`func (o *UserSessionInfoType) HasSessionDefaults() bool`

HasSessionDefaults returns a boolean if a field has been set.

### GetShareProfiles

`func (o *UserSessionInfoType) GetShareProfiles() bool`

GetShareProfiles returns the ShareProfiles field if non-nil, zero value otherwise.

### GetShareProfilesOk

`func (o *UserSessionInfoType) GetShareProfilesOk() (*bool, bool)`

GetShareProfilesOk returns a tuple with the ShareProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareProfiles

`func (o *UserSessionInfoType) SetShareProfiles(v bool)`

SetShareProfiles sets ShareProfiles field to given value.

### HasShareProfiles

`func (o *UserSessionInfoType) HasShareProfiles() bool`

HasShareProfiles returns a boolean if a field has been set.

### GetSystemDate

`func (o *UserSessionInfoType) GetSystemDate() string`

GetSystemDate returns the SystemDate field if non-nil, zero value otherwise.

### GetSystemDateOk

`func (o *UserSessionInfoType) GetSystemDateOk() (*string, bool)`

GetSystemDateOk returns a tuple with the SystemDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemDate

`func (o *UserSessionInfoType) SetSystemDate(v string)`

SetSystemDate sets SystemDate field to given value.

### HasSystemDate

`func (o *UserSessionInfoType) HasSystemDate() bool`

HasSystemDate returns a boolean if a field has been set.

### GetTerminal

`func (o *UserSessionInfoType) GetTerminal() string`

GetTerminal returns the Terminal field if non-nil, zero value otherwise.

### GetTerminalOk

`func (o *UserSessionInfoType) GetTerminalOk() (*string, bool)`

GetTerminalOk returns a tuple with the Terminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminal

`func (o *UserSessionInfoType) SetTerminal(v string)`

SetTerminal sets Terminal field to given value.

### HasTerminal

`func (o *UserSessionInfoType) HasTerminal() bool`

HasTerminal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


