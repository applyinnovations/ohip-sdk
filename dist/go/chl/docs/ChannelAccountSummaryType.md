# ChannelAccountSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountDetails** | Pointer to [**ChannelAccountDetailsType**](ChannelAccountDetailsType.md) |  | [optional] 
**AddressInfo** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 
**ChannelAccountIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**ContractEndsOn** | Pointer to **string** | Channel account contract ends on date. | [optional] 
**EmailInfo** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property of the Billing Account. | [optional] 
**Hotels** | Pointer to **[]string** |  | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the account is inactive or not. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TelephoneInfo** | Pointer to [**TelephoneInfoType**](TelephoneInfoType.md) |  | [optional] 

## Methods

### NewChannelAccountSummaryType

`func NewChannelAccountSummaryType() *ChannelAccountSummaryType`

NewChannelAccountSummaryType instantiates a new ChannelAccountSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountSummaryTypeWithDefaults

`func NewChannelAccountSummaryTypeWithDefaults() *ChannelAccountSummaryType`

NewChannelAccountSummaryTypeWithDefaults instantiates a new ChannelAccountSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountDetails

`func (o *ChannelAccountSummaryType) GetAccountDetails() ChannelAccountDetailsType`

GetAccountDetails returns the AccountDetails field if non-nil, zero value otherwise.

### GetAccountDetailsOk

`func (o *ChannelAccountSummaryType) GetAccountDetailsOk() (*ChannelAccountDetailsType, bool)`

GetAccountDetailsOk returns a tuple with the AccountDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDetails

`func (o *ChannelAccountSummaryType) SetAccountDetails(v ChannelAccountDetailsType)`

SetAccountDetails sets AccountDetails field to given value.

### HasAccountDetails

`func (o *ChannelAccountSummaryType) HasAccountDetails() bool`

HasAccountDetails returns a boolean if a field has been set.

### GetAddressInfo

`func (o *ChannelAccountSummaryType) GetAddressInfo() AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *ChannelAccountSummaryType) GetAddressInfoOk() (*AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *ChannelAccountSummaryType) SetAddressInfo(v AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *ChannelAccountSummaryType) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.

### GetChannelAccountIndicators

`func (o *ChannelAccountSummaryType) GetChannelAccountIndicators() []IndicatorType`

GetChannelAccountIndicators returns the ChannelAccountIndicators field if non-nil, zero value otherwise.

### GetChannelAccountIndicatorsOk

`func (o *ChannelAccountSummaryType) GetChannelAccountIndicatorsOk() (*[]IndicatorType, bool)`

GetChannelAccountIndicatorsOk returns a tuple with the ChannelAccountIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountIndicators

`func (o *ChannelAccountSummaryType) SetChannelAccountIndicators(v []IndicatorType)`

SetChannelAccountIndicators sets ChannelAccountIndicators field to given value.

### HasChannelAccountIndicators

`func (o *ChannelAccountSummaryType) HasChannelAccountIndicators() bool`

HasChannelAccountIndicators returns a boolean if a field has been set.

### GetContractEndsOn

`func (o *ChannelAccountSummaryType) GetContractEndsOn() string`

GetContractEndsOn returns the ContractEndsOn field if non-nil, zero value otherwise.

### GetContractEndsOnOk

`func (o *ChannelAccountSummaryType) GetContractEndsOnOk() (*string, bool)`

GetContractEndsOnOk returns a tuple with the ContractEndsOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractEndsOn

`func (o *ChannelAccountSummaryType) SetContractEndsOn(v string)`

SetContractEndsOn sets ContractEndsOn field to given value.

### HasContractEndsOn

`func (o *ChannelAccountSummaryType) HasContractEndsOn() bool`

HasContractEndsOn returns a boolean if a field has been set.

### GetEmailInfo

`func (o *ChannelAccountSummaryType) GetEmailInfo() EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *ChannelAccountSummaryType) GetEmailInfoOk() (*EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *ChannelAccountSummaryType) SetEmailInfo(v EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *ChannelAccountSummaryType) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelAccountSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelAccountSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelAccountSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelAccountSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotels

`func (o *ChannelAccountSummaryType) GetHotels() []string`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *ChannelAccountSummaryType) GetHotelsOk() (*[]string, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *ChannelAccountSummaryType) SetHotels(v []string)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *ChannelAccountSummaryType) HasHotels() bool`

HasHotels returns a boolean if a field has been set.

### GetInactive

`func (o *ChannelAccountSummaryType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ChannelAccountSummaryType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ChannelAccountSummaryType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ChannelAccountSummaryType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ChannelAccountSummaryType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ChannelAccountSummaryType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ChannelAccountSummaryType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ChannelAccountSummaryType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetTelephoneInfo

`func (o *ChannelAccountSummaryType) GetTelephoneInfo() TelephoneInfoType`

GetTelephoneInfo returns the TelephoneInfo field if non-nil, zero value otherwise.

### GetTelephoneInfoOk

`func (o *ChannelAccountSummaryType) GetTelephoneInfoOk() (*TelephoneInfoType, bool)`

GetTelephoneInfoOk returns a tuple with the TelephoneInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneInfo

`func (o *ChannelAccountSummaryType) SetTelephoneInfo(v TelephoneInfoType)`

SetTelephoneInfo sets TelephoneInfo field to given value.

### HasTelephoneInfo

`func (o *ChannelAccountSummaryType) HasTelephoneInfo() bool`

HasTelephoneInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


