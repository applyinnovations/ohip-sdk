# PackageCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Header** | Pointer to [**PackageCodeHeaderType**](PackageCodeHeaderType.md) |  | [optional] 
**Schedules** | Pointer to [**[]ConfigPackageScheduleType**](ConfigPackageScheduleType.md) | Package code price schedule details. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the packages. | [optional] 
**Code** | Pointer to **string** | Package Code. | [optional] 
**Description** | Pointer to **string** | Package Code Description. | [optional] 
**Group** | Pointer to **bool** | Indicates if it is a Package Group or not. | [optional] 
**RatePlanCode** | Pointer to **string** | Package Code specific to a rate plan code. | [optional] 
**AdjustOverlappingRange** | Pointer to **bool** | Flag to adjust the overlapping dates automatically. True will allow the system to adjust the overlapping dates automatically . False will not allow overlapping dates and throws error messages if overlapping dates are found | [optional] 
**Redemption** | Pointer to **bool** | Flag to configure the package as Award Package so they can be redeemed for points on a reservation | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewPackageCodeType

`func NewPackageCodeType() *PackageCodeType`

NewPackageCodeType instantiates a new PackageCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageCodeTypeWithDefaults

`func NewPackageCodeTypeWithDefaults() *PackageCodeType`

NewPackageCodeTypeWithDefaults instantiates a new PackageCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeader

`func (o *PackageCodeType) GetHeader() PackageCodeHeaderType`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *PackageCodeType) GetHeaderOk() (*PackageCodeHeaderType, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *PackageCodeType) SetHeader(v PackageCodeHeaderType)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *PackageCodeType) HasHeader() bool`

HasHeader returns a boolean if a field has been set.

### GetSchedules

`func (o *PackageCodeType) GetSchedules() []ConfigPackageScheduleType`

GetSchedules returns the Schedules field if non-nil, zero value otherwise.

### GetSchedulesOk

`func (o *PackageCodeType) GetSchedulesOk() (*[]ConfigPackageScheduleType, bool)`

GetSchedulesOk returns a tuple with the Schedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedules

`func (o *PackageCodeType) SetSchedules(v []ConfigPackageScheduleType)`

SetSchedules sets Schedules field to given value.

### HasSchedules

`func (o *PackageCodeType) HasSchedules() bool`

HasSchedules returns a boolean if a field has been set.

### GetHotelId

`func (o *PackageCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PackageCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PackageCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PackageCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *PackageCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PackageCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PackageCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PackageCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *PackageCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PackageCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PackageCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PackageCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGroup

`func (o *PackageCodeType) GetGroup() bool`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *PackageCodeType) GetGroupOk() (*bool, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *PackageCodeType) SetGroup(v bool)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *PackageCodeType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *PackageCodeType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *PackageCodeType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *PackageCodeType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *PackageCodeType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetAdjustOverlappingRange

`func (o *PackageCodeType) GetAdjustOverlappingRange() bool`

GetAdjustOverlappingRange returns the AdjustOverlappingRange field if non-nil, zero value otherwise.

### GetAdjustOverlappingRangeOk

`func (o *PackageCodeType) GetAdjustOverlappingRangeOk() (*bool, bool)`

GetAdjustOverlappingRangeOk returns a tuple with the AdjustOverlappingRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustOverlappingRange

`func (o *PackageCodeType) SetAdjustOverlappingRange(v bool)`

SetAdjustOverlappingRange sets AdjustOverlappingRange field to given value.

### HasAdjustOverlappingRange

`func (o *PackageCodeType) HasAdjustOverlappingRange() bool`

HasAdjustOverlappingRange returns a boolean if a field has been set.

### GetRedemption

`func (o *PackageCodeType) GetRedemption() bool`

GetRedemption returns the Redemption field if non-nil, zero value otherwise.

### GetRedemptionOk

`func (o *PackageCodeType) GetRedemptionOk() (*bool, bool)`

GetRedemptionOk returns a tuple with the Redemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedemption

`func (o *PackageCodeType) SetRedemption(v bool)`

SetRedemption sets Redemption field to given value.

### HasRedemption

`func (o *PackageCodeType) HasRedemption() bool`

HasRedemption returns a boolean if a field has been set.

### GetManagedBy

`func (o *PackageCodeType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *PackageCodeType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *PackageCodeType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *PackageCodeType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.

### GetHasMore

`func (o *PackageCodeType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *PackageCodeType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *PackageCodeType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *PackageCodeType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *PackageCodeType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *PackageCodeType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *PackageCodeType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *PackageCodeType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *PackageCodeType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PackageCodeType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PackageCodeType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *PackageCodeType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


