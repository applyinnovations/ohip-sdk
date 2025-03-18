# GetChannelRatesAccessItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Id. | [optional] 
**ChannelCode** | Pointer to **string** | Channel Room Type. | [optional] 
**RatePlanCode** | Pointer to **string** | Channel Room Type. | [optional] 
**ChannelRatePlanCode** | Pointer to **string** | Channel Room Type. | [optional] 
**ChannelRatePlanOrder** | Pointer to **int32** | Channel Room Type. | [optional] 
**RateAccessCode** | Pointer to **string** | Negotiated Rate Access Code. | [optional] 
**StartDate** | Pointer to **string** | Start Date of the Channel Rate Access Code. | [optional] 
**EndDate** | Pointer to **string** | End Date of the Channel Rate Access Code. | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**ProfileId** | Pointer to **string** | Profile Id for which Channel Rate access code is applicable for. | [optional] 
**AccountId** | Pointer to **string** | Account Id for which Channel Rate access code is applicable for. | [optional] 
**AccountName** | Pointer to **string** | Account name for which Channel Rate access Code is applicable for. | [optional] 
**ProfileAccountType** | Pointer to [**AccountTypeEnum**](AccountTypeEnum.md) |  | [optional] 

## Methods

### NewGetChannelRatesAccessItems

`func NewGetChannelRatesAccessItems() *GetChannelRatesAccessItems`

NewGetChannelRatesAccessItems instantiates a new GetChannelRatesAccessItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetChannelRatesAccessItemsWithDefaults

`func NewGetChannelRatesAccessItemsWithDefaults() *GetChannelRatesAccessItems`

NewGetChannelRatesAccessItemsWithDefaults instantiates a new GetChannelRatesAccessItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *GetChannelRatesAccessItems) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *GetChannelRatesAccessItems) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *GetChannelRatesAccessItems) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *GetChannelRatesAccessItems) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetChannelCode

`func (o *GetChannelRatesAccessItems) GetChannelCode() string`

GetChannelCode returns the ChannelCode field if non-nil, zero value otherwise.

### GetChannelCodeOk

`func (o *GetChannelRatesAccessItems) GetChannelCodeOk() (*string, bool)`

GetChannelCodeOk returns a tuple with the ChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCode

`func (o *GetChannelRatesAccessItems) SetChannelCode(v string)`

SetChannelCode sets ChannelCode field to given value.

### HasChannelCode

`func (o *GetChannelRatesAccessItems) HasChannelCode() bool`

HasChannelCode returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *GetChannelRatesAccessItems) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *GetChannelRatesAccessItems) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *GetChannelRatesAccessItems) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *GetChannelRatesAccessItems) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetChannelRatePlanCode

`func (o *GetChannelRatesAccessItems) GetChannelRatePlanCode() string`

GetChannelRatePlanCode returns the ChannelRatePlanCode field if non-nil, zero value otherwise.

### GetChannelRatePlanCodeOk

`func (o *GetChannelRatesAccessItems) GetChannelRatePlanCodeOk() (*string, bool)`

GetChannelRatePlanCodeOk returns a tuple with the ChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCode

`func (o *GetChannelRatesAccessItems) SetChannelRatePlanCode(v string)`

SetChannelRatePlanCode sets ChannelRatePlanCode field to given value.

### HasChannelRatePlanCode

`func (o *GetChannelRatesAccessItems) HasChannelRatePlanCode() bool`

HasChannelRatePlanCode returns a boolean if a field has been set.

### GetChannelRatePlanOrder

`func (o *GetChannelRatesAccessItems) GetChannelRatePlanOrder() int32`

GetChannelRatePlanOrder returns the ChannelRatePlanOrder field if non-nil, zero value otherwise.

### GetChannelRatePlanOrderOk

`func (o *GetChannelRatesAccessItems) GetChannelRatePlanOrderOk() (*int32, bool)`

GetChannelRatePlanOrderOk returns a tuple with the ChannelRatePlanOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanOrder

`func (o *GetChannelRatesAccessItems) SetChannelRatePlanOrder(v int32)`

SetChannelRatePlanOrder sets ChannelRatePlanOrder field to given value.

### HasChannelRatePlanOrder

`func (o *GetChannelRatesAccessItems) HasChannelRatePlanOrder() bool`

HasChannelRatePlanOrder returns a boolean if a field has been set.

### GetRateAccessCode

`func (o *GetChannelRatesAccessItems) GetRateAccessCode() string`

GetRateAccessCode returns the RateAccessCode field if non-nil, zero value otherwise.

### GetRateAccessCodeOk

`func (o *GetChannelRatesAccessItems) GetRateAccessCodeOk() (*string, bool)`

GetRateAccessCodeOk returns a tuple with the RateAccessCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAccessCode

`func (o *GetChannelRatesAccessItems) SetRateAccessCode(v string)`

SetRateAccessCode sets RateAccessCode field to given value.

### HasRateAccessCode

`func (o *GetChannelRatesAccessItems) HasRateAccessCode() bool`

HasRateAccessCode returns a boolean if a field has been set.

### GetStartDate

`func (o *GetChannelRatesAccessItems) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetChannelRatesAccessItems) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetChannelRatesAccessItems) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GetChannelRatesAccessItems) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *GetChannelRatesAccessItems) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *GetChannelRatesAccessItems) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *GetChannelRatesAccessItems) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *GetChannelRatesAccessItems) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetActive

`func (o *GetChannelRatesAccessItems) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *GetChannelRatesAccessItems) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *GetChannelRatesAccessItems) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *GetChannelRatesAccessItems) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProfileId

`func (o *GetChannelRatesAccessItems) GetProfileId() string`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *GetChannelRatesAccessItems) GetProfileIdOk() (*string, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *GetChannelRatesAccessItems) SetProfileId(v string)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *GetChannelRatesAccessItems) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetAccountId

`func (o *GetChannelRatesAccessItems) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *GetChannelRatesAccessItems) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *GetChannelRatesAccessItems) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *GetChannelRatesAccessItems) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *GetChannelRatesAccessItems) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *GetChannelRatesAccessItems) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *GetChannelRatesAccessItems) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *GetChannelRatesAccessItems) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetProfileAccountType

`func (o *GetChannelRatesAccessItems) GetProfileAccountType() AccountTypeEnum`

GetProfileAccountType returns the ProfileAccountType field if non-nil, zero value otherwise.

### GetProfileAccountTypeOk

`func (o *GetChannelRatesAccessItems) GetProfileAccountTypeOk() (*AccountTypeEnum, bool)`

GetProfileAccountTypeOk returns a tuple with the ProfileAccountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccountType

`func (o *GetChannelRatesAccessItems) SetProfileAccountType(v AccountTypeEnum)`

SetProfileAccountType sets ProfileAccountType field to given value.

### HasProfileAccountType

`func (o *GetChannelRatesAccessItems) HasProfileAccountType() bool`

HasProfileAccountType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


