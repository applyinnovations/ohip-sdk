# ChannelAccountSetupDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainCode** | Pointer to **string** | Chain information where current account is configured with. | [optional] 
**ContractEndsOn** | Pointer to **string** | Contract End date. | [optional] 
**CurrencyCode** | Pointer to **string** | Holds Currency code. | [optional] 
**HotelCodes** | Pointer to **[]string** |  | [optional] 
**InactiveDate** | Pointer to **string** | The date that account was marked as inactive. | [optional] 
**Instances** | Pointer to **[]string** |  | [optional] 
**RebateDate** | Pointer to **string** | The rebate date for the account. | [optional] 
**RegisteredHotel** | Pointer to **string** | Property which registered this channel account. | [optional] 

## Methods

### NewChannelAccountSetupDetailsType

`func NewChannelAccountSetupDetailsType() *ChannelAccountSetupDetailsType`

NewChannelAccountSetupDetailsType instantiates a new ChannelAccountSetupDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountSetupDetailsTypeWithDefaults

`func NewChannelAccountSetupDetailsTypeWithDefaults() *ChannelAccountSetupDetailsType`

NewChannelAccountSetupDetailsTypeWithDefaults instantiates a new ChannelAccountSetupDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainCode

`func (o *ChannelAccountSetupDetailsType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *ChannelAccountSetupDetailsType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *ChannelAccountSetupDetailsType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *ChannelAccountSetupDetailsType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetContractEndsOn

`func (o *ChannelAccountSetupDetailsType) GetContractEndsOn() string`

GetContractEndsOn returns the ContractEndsOn field if non-nil, zero value otherwise.

### GetContractEndsOnOk

`func (o *ChannelAccountSetupDetailsType) GetContractEndsOnOk() (*string, bool)`

GetContractEndsOnOk returns a tuple with the ContractEndsOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractEndsOn

`func (o *ChannelAccountSetupDetailsType) SetContractEndsOn(v string)`

SetContractEndsOn sets ContractEndsOn field to given value.

### HasContractEndsOn

`func (o *ChannelAccountSetupDetailsType) HasContractEndsOn() bool`

HasContractEndsOn returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ChannelAccountSetupDetailsType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ChannelAccountSetupDetailsType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ChannelAccountSetupDetailsType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ChannelAccountSetupDetailsType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetHotelCodes

`func (o *ChannelAccountSetupDetailsType) GetHotelCodes() []string`

GetHotelCodes returns the HotelCodes field if non-nil, zero value otherwise.

### GetHotelCodesOk

`func (o *ChannelAccountSetupDetailsType) GetHotelCodesOk() (*[]string, bool)`

GetHotelCodesOk returns a tuple with the HotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodes

`func (o *ChannelAccountSetupDetailsType) SetHotelCodes(v []string)`

SetHotelCodes sets HotelCodes field to given value.

### HasHotelCodes

`func (o *ChannelAccountSetupDetailsType) HasHotelCodes() bool`

HasHotelCodes returns a boolean if a field has been set.

### GetInactiveDate

`func (o *ChannelAccountSetupDetailsType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *ChannelAccountSetupDetailsType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *ChannelAccountSetupDetailsType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *ChannelAccountSetupDetailsType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetInstances

`func (o *ChannelAccountSetupDetailsType) GetInstances() []string`

GetInstances returns the Instances field if non-nil, zero value otherwise.

### GetInstancesOk

`func (o *ChannelAccountSetupDetailsType) GetInstancesOk() (*[]string, bool)`

GetInstancesOk returns a tuple with the Instances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstances

`func (o *ChannelAccountSetupDetailsType) SetInstances(v []string)`

SetInstances sets Instances field to given value.

### HasInstances

`func (o *ChannelAccountSetupDetailsType) HasInstances() bool`

HasInstances returns a boolean if a field has been set.

### GetRebateDate

`func (o *ChannelAccountSetupDetailsType) GetRebateDate() string`

GetRebateDate returns the RebateDate field if non-nil, zero value otherwise.

### GetRebateDateOk

`func (o *ChannelAccountSetupDetailsType) GetRebateDateOk() (*string, bool)`

GetRebateDateOk returns a tuple with the RebateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRebateDate

`func (o *ChannelAccountSetupDetailsType) SetRebateDate(v string)`

SetRebateDate sets RebateDate field to given value.

### HasRebateDate

`func (o *ChannelAccountSetupDetailsType) HasRebateDate() bool`

HasRebateDate returns a boolean if a field has been set.

### GetRegisteredHotel

`func (o *ChannelAccountSetupDetailsType) GetRegisteredHotel() string`

GetRegisteredHotel returns the RegisteredHotel field if non-nil, zero value otherwise.

### GetRegisteredHotelOk

`func (o *ChannelAccountSetupDetailsType) GetRegisteredHotelOk() (*string, bool)`

GetRegisteredHotelOk returns a tuple with the RegisteredHotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredHotel

`func (o *ChannelAccountSetupDetailsType) SetRegisteredHotel(v string)`

SetRegisteredHotel sets RegisteredHotel field to given value.

### HasRegisteredHotel

`func (o *ChannelAccountSetupDetailsType) HasRegisteredHotel() bool`

HasRegisteredHotel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


