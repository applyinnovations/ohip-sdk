# DistributionTemplateChannelRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRateCategory** | Pointer to **string** | Channel Rate Category where distribution template will be distributed to. | [optional] 
**ChannelRateCode** | Pointer to **string** | Channel Rate Code where distribution template will be distributed to. | [optional] 
**ChannelRateLevel** | Pointer to **string** | Channel Rate Level where distribution template will be distributed to. | [optional] 
**RateUpdate** | Pointer to **bool** | Rate update flag which will be the default value when rate code is distributed to channels. | [optional] 
**RegionalAvailability** | Pointer to **bool** | Regional Availability flag which will be the default value when rate code is distributed to channels. | [optional] 
**RestrictionUpdate** | Pointer to **bool** | Restriction update flag which will be the default value when rate code is distributed to channels. | [optional] 
**ReturnSGA** | Pointer to **bool** | Return SGA flag which will be the default value when rate code is distributed to channels. | [optional] 
**SystemInfo** | Pointer to [**SystemInfoType**](SystemInfoType.md) |  | [optional] 

## Methods

### NewDistributionTemplateChannelRateType

`func NewDistributionTemplateChannelRateType() *DistributionTemplateChannelRateType`

NewDistributionTemplateChannelRateType instantiates a new DistributionTemplateChannelRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistributionTemplateChannelRateTypeWithDefaults

`func NewDistributionTemplateChannelRateTypeWithDefaults() *DistributionTemplateChannelRateType`

NewDistributionTemplateChannelRateTypeWithDefaults instantiates a new DistributionTemplateChannelRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRateCategory

`func (o *DistributionTemplateChannelRateType) GetChannelRateCategory() string`

GetChannelRateCategory returns the ChannelRateCategory field if non-nil, zero value otherwise.

### GetChannelRateCategoryOk

`func (o *DistributionTemplateChannelRateType) GetChannelRateCategoryOk() (*string, bool)`

GetChannelRateCategoryOk returns a tuple with the ChannelRateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateCategory

`func (o *DistributionTemplateChannelRateType) SetChannelRateCategory(v string)`

SetChannelRateCategory sets ChannelRateCategory field to given value.

### HasChannelRateCategory

`func (o *DistributionTemplateChannelRateType) HasChannelRateCategory() bool`

HasChannelRateCategory returns a boolean if a field has been set.

### GetChannelRateCode

`func (o *DistributionTemplateChannelRateType) GetChannelRateCode() string`

GetChannelRateCode returns the ChannelRateCode field if non-nil, zero value otherwise.

### GetChannelRateCodeOk

`func (o *DistributionTemplateChannelRateType) GetChannelRateCodeOk() (*string, bool)`

GetChannelRateCodeOk returns a tuple with the ChannelRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateCode

`func (o *DistributionTemplateChannelRateType) SetChannelRateCode(v string)`

SetChannelRateCode sets ChannelRateCode field to given value.

### HasChannelRateCode

`func (o *DistributionTemplateChannelRateType) HasChannelRateCode() bool`

HasChannelRateCode returns a boolean if a field has been set.

### GetChannelRateLevel

`func (o *DistributionTemplateChannelRateType) GetChannelRateLevel() string`

GetChannelRateLevel returns the ChannelRateLevel field if non-nil, zero value otherwise.

### GetChannelRateLevelOk

`func (o *DistributionTemplateChannelRateType) GetChannelRateLevelOk() (*string, bool)`

GetChannelRateLevelOk returns a tuple with the ChannelRateLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateLevel

`func (o *DistributionTemplateChannelRateType) SetChannelRateLevel(v string)`

SetChannelRateLevel sets ChannelRateLevel field to given value.

### HasChannelRateLevel

`func (o *DistributionTemplateChannelRateType) HasChannelRateLevel() bool`

HasChannelRateLevel returns a boolean if a field has been set.

### GetRateUpdate

`func (o *DistributionTemplateChannelRateType) GetRateUpdate() bool`

GetRateUpdate returns the RateUpdate field if non-nil, zero value otherwise.

### GetRateUpdateOk

`func (o *DistributionTemplateChannelRateType) GetRateUpdateOk() (*bool, bool)`

GetRateUpdateOk returns a tuple with the RateUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateUpdate

`func (o *DistributionTemplateChannelRateType) SetRateUpdate(v bool)`

SetRateUpdate sets RateUpdate field to given value.

### HasRateUpdate

`func (o *DistributionTemplateChannelRateType) HasRateUpdate() bool`

HasRateUpdate returns a boolean if a field has been set.

### GetRegionalAvailability

`func (o *DistributionTemplateChannelRateType) GetRegionalAvailability() bool`

GetRegionalAvailability returns the RegionalAvailability field if non-nil, zero value otherwise.

### GetRegionalAvailabilityOk

`func (o *DistributionTemplateChannelRateType) GetRegionalAvailabilityOk() (*bool, bool)`

GetRegionalAvailabilityOk returns a tuple with the RegionalAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionalAvailability

`func (o *DistributionTemplateChannelRateType) SetRegionalAvailability(v bool)`

SetRegionalAvailability sets RegionalAvailability field to given value.

### HasRegionalAvailability

`func (o *DistributionTemplateChannelRateType) HasRegionalAvailability() bool`

HasRegionalAvailability returns a boolean if a field has been set.

### GetRestrictionUpdate

`func (o *DistributionTemplateChannelRateType) GetRestrictionUpdate() bool`

GetRestrictionUpdate returns the RestrictionUpdate field if non-nil, zero value otherwise.

### GetRestrictionUpdateOk

`func (o *DistributionTemplateChannelRateType) GetRestrictionUpdateOk() (*bool, bool)`

GetRestrictionUpdateOk returns a tuple with the RestrictionUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionUpdate

`func (o *DistributionTemplateChannelRateType) SetRestrictionUpdate(v bool)`

SetRestrictionUpdate sets RestrictionUpdate field to given value.

### HasRestrictionUpdate

`func (o *DistributionTemplateChannelRateType) HasRestrictionUpdate() bool`

HasRestrictionUpdate returns a boolean if a field has been set.

### GetReturnSGA

`func (o *DistributionTemplateChannelRateType) GetReturnSGA() bool`

GetReturnSGA returns the ReturnSGA field if non-nil, zero value otherwise.

### GetReturnSGAOk

`func (o *DistributionTemplateChannelRateType) GetReturnSGAOk() (*bool, bool)`

GetReturnSGAOk returns a tuple with the ReturnSGA field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnSGA

`func (o *DistributionTemplateChannelRateType) SetReturnSGA(v bool)`

SetReturnSGA sets ReturnSGA field to given value.

### HasReturnSGA

`func (o *DistributionTemplateChannelRateType) HasReturnSGA() bool`

HasReturnSGA returns a boolean if a field has been set.

### GetSystemInfo

`func (o *DistributionTemplateChannelRateType) GetSystemInfo() SystemInfoType`

GetSystemInfo returns the SystemInfo field if non-nil, zero value otherwise.

### GetSystemInfoOk

`func (o *DistributionTemplateChannelRateType) GetSystemInfoOk() (*SystemInfoType, bool)`

GetSystemInfoOk returns a tuple with the SystemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemInfo

`func (o *DistributionTemplateChannelRateType) SetSystemInfo(v SystemInfoType)`

SetSystemInfo sets SystemInfo field to given value.

### HasSystemInfo

`func (o *DistributionTemplateChannelRateType) HasSystemInfo() bool`

HasSystemInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


