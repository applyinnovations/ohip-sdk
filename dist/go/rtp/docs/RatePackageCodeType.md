# RatePackageCodeType

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
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**ScheduleExceptions** | Pointer to [**[]ConfigPackageScheduleType**](ConfigPackageScheduleType.md) | Package code schedule price exception for the rate plan. | [optional] 
**Quantity** | Pointer to **int32** | Quantity of the package code included in the rate plan. | [optional] 

## Methods

### NewRatePackageCodeType

`func NewRatePackageCodeType() *RatePackageCodeType`

NewRatePackageCodeType instantiates a new RatePackageCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePackageCodeTypeWithDefaults

`func NewRatePackageCodeTypeWithDefaults() *RatePackageCodeType`

NewRatePackageCodeTypeWithDefaults instantiates a new RatePackageCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeader

`func (o *RatePackageCodeType) GetHeader() PackageCodeHeaderType`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *RatePackageCodeType) GetHeaderOk() (*PackageCodeHeaderType, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *RatePackageCodeType) SetHeader(v PackageCodeHeaderType)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *RatePackageCodeType) HasHeader() bool`

HasHeader returns a boolean if a field has been set.

### GetSchedules

`func (o *RatePackageCodeType) GetSchedules() []ConfigPackageScheduleType`

GetSchedules returns the Schedules field if non-nil, zero value otherwise.

### GetSchedulesOk

`func (o *RatePackageCodeType) GetSchedulesOk() (*[]ConfigPackageScheduleType, bool)`

GetSchedulesOk returns a tuple with the Schedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedules

`func (o *RatePackageCodeType) SetSchedules(v []ConfigPackageScheduleType)`

SetSchedules sets Schedules field to given value.

### HasSchedules

`func (o *RatePackageCodeType) HasSchedules() bool`

HasSchedules returns a boolean if a field has been set.

### GetHotelId

`func (o *RatePackageCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePackageCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePackageCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePackageCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *RatePackageCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RatePackageCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RatePackageCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RatePackageCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RatePackageCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RatePackageCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RatePackageCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RatePackageCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGroup

`func (o *RatePackageCodeType) GetGroup() bool`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *RatePackageCodeType) GetGroupOk() (*bool, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *RatePackageCodeType) SetGroup(v bool)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *RatePackageCodeType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RatePackageCodeType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePackageCodeType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePackageCodeType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePackageCodeType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetAdjustOverlappingRange

`func (o *RatePackageCodeType) GetAdjustOverlappingRange() bool`

GetAdjustOverlappingRange returns the AdjustOverlappingRange field if non-nil, zero value otherwise.

### GetAdjustOverlappingRangeOk

`func (o *RatePackageCodeType) GetAdjustOverlappingRangeOk() (*bool, bool)`

GetAdjustOverlappingRangeOk returns a tuple with the AdjustOverlappingRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustOverlappingRange

`func (o *RatePackageCodeType) SetAdjustOverlappingRange(v bool)`

SetAdjustOverlappingRange sets AdjustOverlappingRange field to given value.

### HasAdjustOverlappingRange

`func (o *RatePackageCodeType) HasAdjustOverlappingRange() bool`

HasAdjustOverlappingRange returns a boolean if a field has been set.

### GetHasMore

`func (o *RatePackageCodeType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RatePackageCodeType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RatePackageCodeType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RatePackageCodeType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RatePackageCodeType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RatePackageCodeType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RatePackageCodeType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RatePackageCodeType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *RatePackageCodeType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RatePackageCodeType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RatePackageCodeType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RatePackageCodeType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetScheduleExceptions

`func (o *RatePackageCodeType) GetScheduleExceptions() []ConfigPackageScheduleType`

GetScheduleExceptions returns the ScheduleExceptions field if non-nil, zero value otherwise.

### GetScheduleExceptionsOk

`func (o *RatePackageCodeType) GetScheduleExceptionsOk() (*[]ConfigPackageScheduleType, bool)`

GetScheduleExceptionsOk returns a tuple with the ScheduleExceptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleExceptions

`func (o *RatePackageCodeType) SetScheduleExceptions(v []ConfigPackageScheduleType)`

SetScheduleExceptions sets ScheduleExceptions field to given value.

### HasScheduleExceptions

`func (o *RatePackageCodeType) HasScheduleExceptions() bool`

HasScheduleExceptions returns a boolean if a field has been set.

### GetQuantity

`func (o *RatePackageCodeType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *RatePackageCodeType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *RatePackageCodeType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *RatePackageCodeType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


