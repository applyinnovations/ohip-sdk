# AmenityMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemInfo** | Pointer to [**SystemInfoType**](SystemInfoType.md) |  | [optional] 
**LocalSystemCode** | Pointer to **string** | Code used inside the OPERA System | [optional] 
**ExternalSystemCode** | Pointer to **string** | Code used in the External System | [optional] 
**Description** | Pointer to **string** | Detailed Description of the given entity. | [optional] 
**DateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**AmenityGroup** | Pointer to [**AmenityGroupType**](AmenityGroupType.md) |  | [optional] 

## Methods

### NewAmenityMappingType

`func NewAmenityMappingType() *AmenityMappingType`

NewAmenityMappingType instantiates a new AmenityMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAmenityMappingTypeWithDefaults

`func NewAmenityMappingTypeWithDefaults() *AmenityMappingType`

NewAmenityMappingTypeWithDefaults instantiates a new AmenityMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemInfo

`func (o *AmenityMappingType) GetSystemInfo() SystemInfoType`

GetSystemInfo returns the SystemInfo field if non-nil, zero value otherwise.

### GetSystemInfoOk

`func (o *AmenityMappingType) GetSystemInfoOk() (*SystemInfoType, bool)`

GetSystemInfoOk returns a tuple with the SystemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemInfo

`func (o *AmenityMappingType) SetSystemInfo(v SystemInfoType)`

SetSystemInfo sets SystemInfo field to given value.

### HasSystemInfo

`func (o *AmenityMappingType) HasSystemInfo() bool`

HasSystemInfo returns a boolean if a field has been set.

### GetLocalSystemCode

`func (o *AmenityMappingType) GetLocalSystemCode() string`

GetLocalSystemCode returns the LocalSystemCode field if non-nil, zero value otherwise.

### GetLocalSystemCodeOk

`func (o *AmenityMappingType) GetLocalSystemCodeOk() (*string, bool)`

GetLocalSystemCodeOk returns a tuple with the LocalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalSystemCode

`func (o *AmenityMappingType) SetLocalSystemCode(v string)`

SetLocalSystemCode sets LocalSystemCode field to given value.

### HasLocalSystemCode

`func (o *AmenityMappingType) HasLocalSystemCode() bool`

HasLocalSystemCode returns a boolean if a field has been set.

### GetExternalSystemCode

`func (o *AmenityMappingType) GetExternalSystemCode() string`

GetExternalSystemCode returns the ExternalSystemCode field if non-nil, zero value otherwise.

### GetExternalSystemCodeOk

`func (o *AmenityMappingType) GetExternalSystemCodeOk() (*string, bool)`

GetExternalSystemCodeOk returns a tuple with the ExternalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystemCode

`func (o *AmenityMappingType) SetExternalSystemCode(v string)`

SetExternalSystemCode sets ExternalSystemCode field to given value.

### HasExternalSystemCode

`func (o *AmenityMappingType) HasExternalSystemCode() bool`

HasExternalSystemCode returns a boolean if a field has been set.

### GetDescription

`func (o *AmenityMappingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AmenityMappingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AmenityMappingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AmenityMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDateRange

`func (o *AmenityMappingType) GetDateRange() TimeSpanType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *AmenityMappingType) GetDateRangeOk() (*TimeSpanType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *AmenityMappingType) SetDateRange(v TimeSpanType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *AmenityMappingType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetAmenityGroup

`func (o *AmenityMappingType) GetAmenityGroup() AmenityGroupType`

GetAmenityGroup returns the AmenityGroup field if non-nil, zero value otherwise.

### GetAmenityGroupOk

`func (o *AmenityMappingType) GetAmenityGroupOk() (*AmenityGroupType, bool)`

GetAmenityGroupOk returns a tuple with the AmenityGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmenityGroup

`func (o *AmenityMappingType) SetAmenityGroup(v AmenityGroupType)`

SetAmenityGroup sets AmenityGroup field to given value.

### HasAmenityGroup

`func (o *AmenityMappingType) HasAmenityGroup() bool`

HasAmenityGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


