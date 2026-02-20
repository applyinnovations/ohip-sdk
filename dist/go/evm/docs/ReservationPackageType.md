# ReservationPackageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageHeaderType** | Pointer to [**PackageCodeHeaderType**](PackageCodeHeaderType.md) |  | [optional] 
**ScheduleList** | Pointer to [**[]ReservationPackageScheduleType**](ReservationPackageScheduleType.md) | A HotelPackageSchedule type. | [optional] 
**NewTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**ConsumptionDetails** | Pointer to [**PackageConsumptionType**](PackageConsumptionType.md) |  | [optional] 
**PackageCode** | Pointer to **string** | Package code. This is the unique code used for the package and is a required elementSpace. | [optional] 
**InternalID** | Pointer to **float32** | Reservation Package Opera Internal Unique Id. This is the unique Id used for this reservation package. | [optional] 
**RatePlanCode** | Pointer to **string** | The rate code which contains this package. If the package is not part of a rate code, this will be empty. Required elementSpace and part of the key to fetch the correct package record on the reservation. | [optional] 
**StartDate** | Pointer to **string** | Required value when changing a reservation package. If the original eventStartDate date was null, then null is required. | [optional] 
**EndDate** | Pointer to **string** | Required value when changing a reservation package. If the original eventEndDate date was null, then null is required. | [optional] 
**PackageGroup** | Pointer to **string** | Package group code. If this package is part of a package group, the group code is indicated here. This is a required elementSpace and is part of the key to fetch the correct package record . | [optional] 
**Source** | Pointer to [**ProductSourceType**](ProductSourceType.md) |  | [optional] 
**AwardCode** | Pointer to **string** | This is the Award code used to redeem the package if the package is a redemption package. | [optional] 
**Points** | Pointer to **int32** | Indicates the points used to redeem the redemption package. | [optional] 

## Methods

### NewReservationPackageType

`func NewReservationPackageType() *ReservationPackageType`

NewReservationPackageType instantiates a new ReservationPackageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPackageTypeWithDefaults

`func NewReservationPackageTypeWithDefaults() *ReservationPackageType`

NewReservationPackageTypeWithDefaults instantiates a new ReservationPackageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackageHeaderType

`func (o *ReservationPackageType) GetPackageHeaderType() PackageCodeHeaderType`

GetPackageHeaderType returns the PackageHeaderType field if non-nil, zero value otherwise.

### GetPackageHeaderTypeOk

`func (o *ReservationPackageType) GetPackageHeaderTypeOk() (*PackageCodeHeaderType, bool)`

GetPackageHeaderTypeOk returns a tuple with the PackageHeaderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageHeaderType

`func (o *ReservationPackageType) SetPackageHeaderType(v PackageCodeHeaderType)`

SetPackageHeaderType sets PackageHeaderType field to given value.

### HasPackageHeaderType

`func (o *ReservationPackageType) HasPackageHeaderType() bool`

HasPackageHeaderType returns a boolean if a field has been set.

### GetScheduleList

`func (o *ReservationPackageType) GetScheduleList() []ReservationPackageScheduleType`

GetScheduleList returns the ScheduleList field if non-nil, zero value otherwise.

### GetScheduleListOk

`func (o *ReservationPackageType) GetScheduleListOk() (*[]ReservationPackageScheduleType, bool)`

GetScheduleListOk returns a tuple with the ScheduleList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleList

`func (o *ReservationPackageType) SetScheduleList(v []ReservationPackageScheduleType)`

SetScheduleList sets ScheduleList field to given value.

### HasScheduleList

`func (o *ReservationPackageType) HasScheduleList() bool`

HasScheduleList returns a boolean if a field has been set.

### GetNewTimeSpan

`func (o *ReservationPackageType) GetNewTimeSpan() TimeSpanType`

GetNewTimeSpan returns the NewTimeSpan field if non-nil, zero value otherwise.

### GetNewTimeSpanOk

`func (o *ReservationPackageType) GetNewTimeSpanOk() (*TimeSpanType, bool)`

GetNewTimeSpanOk returns a tuple with the NewTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTimeSpan

`func (o *ReservationPackageType) SetNewTimeSpan(v TimeSpanType)`

SetNewTimeSpan sets NewTimeSpan field to given value.

### HasNewTimeSpan

`func (o *ReservationPackageType) HasNewTimeSpan() bool`

HasNewTimeSpan returns a boolean if a field has been set.

### GetConsumptionDetails

`func (o *ReservationPackageType) GetConsumptionDetails() PackageConsumptionType`

GetConsumptionDetails returns the ConsumptionDetails field if non-nil, zero value otherwise.

### GetConsumptionDetailsOk

`func (o *ReservationPackageType) GetConsumptionDetailsOk() (*PackageConsumptionType, bool)`

GetConsumptionDetailsOk returns a tuple with the ConsumptionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionDetails

`func (o *ReservationPackageType) SetConsumptionDetails(v PackageConsumptionType)`

SetConsumptionDetails sets ConsumptionDetails field to given value.

### HasConsumptionDetails

`func (o *ReservationPackageType) HasConsumptionDetails() bool`

HasConsumptionDetails returns a boolean if a field has been set.

### GetPackageCode

`func (o *ReservationPackageType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *ReservationPackageType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *ReservationPackageType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *ReservationPackageType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetInternalID

`func (o *ReservationPackageType) GetInternalID() float32`

GetInternalID returns the InternalID field if non-nil, zero value otherwise.

### GetInternalIDOk

`func (o *ReservationPackageType) GetInternalIDOk() (*float32, bool)`

GetInternalIDOk returns a tuple with the InternalID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalID

`func (o *ReservationPackageType) SetInternalID(v float32)`

SetInternalID sets InternalID field to given value.

### HasInternalID

`func (o *ReservationPackageType) HasInternalID() bool`

HasInternalID returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ReservationPackageType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ReservationPackageType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ReservationPackageType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ReservationPackageType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetStartDate

`func (o *ReservationPackageType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ReservationPackageType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ReservationPackageType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ReservationPackageType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ReservationPackageType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ReservationPackageType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ReservationPackageType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ReservationPackageType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetPackageGroup

`func (o *ReservationPackageType) GetPackageGroup() string`

GetPackageGroup returns the PackageGroup field if non-nil, zero value otherwise.

### GetPackageGroupOk

`func (o *ReservationPackageType) GetPackageGroupOk() (*string, bool)`

GetPackageGroupOk returns a tuple with the PackageGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageGroup

`func (o *ReservationPackageType) SetPackageGroup(v string)`

SetPackageGroup sets PackageGroup field to given value.

### HasPackageGroup

`func (o *ReservationPackageType) HasPackageGroup() bool`

HasPackageGroup returns a boolean if a field has been set.

### GetSource

`func (o *ReservationPackageType) GetSource() ProductSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ReservationPackageType) GetSourceOk() (*ProductSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ReservationPackageType) SetSource(v ProductSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ReservationPackageType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAwardCode

`func (o *ReservationPackageType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *ReservationPackageType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *ReservationPackageType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *ReservationPackageType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetPoints

`func (o *ReservationPackageType) GetPoints() int32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *ReservationPackageType) GetPointsOk() (*int32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *ReservationPackageType) SetPoints(v int32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *ReservationPackageType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


