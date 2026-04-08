# AddOnReservationPackageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleList** | Pointer to [**[]ReservationPackageScheduleType**](ReservationPackageScheduleType.md) | A HotelPackageSchedule type. | [optional] 
**ConsumptionDetails** | Pointer to [**PackageConsumptionType**](PackageConsumptionType.md) |  | [optional] 
**PackageCode** | Pointer to **string** | Package code. This is the unique code used for the package and is a required element. | [optional] 
**InternalId** | Pointer to **float32** | Reservation Package Opera Internal Unique Id. This is the unique Id used for this reservation package. | [optional] 
**StartDate** | Pointer to **string** | Package begin date. | [optional] 
**EndDate** | Pointer to **string** | Package End Date. | [optional] 
**PackageGroup** | Pointer to **string** | Package group code. Package group code is used to link multiple packages that are members of a group. | [optional] 
**Source** | Pointer to [**ProductSourceType**](ProductSourceType.md) |  | [optional] 
**AwardCode** | Pointer to **string** | This is the Award code used to redeem the package if the package is a redemption package. | [optional] 
**Points** | Pointer to **int32** | Indicates the points used to redeem the redemption package. | [optional] 
**CalculationRule** | Pointer to [**PackageCalculationRuleType**](PackageCalculationRuleType.md) |  | [optional] 

## Methods

### NewAddOnReservationPackageType

`func NewAddOnReservationPackageType() *AddOnReservationPackageType`

NewAddOnReservationPackageType instantiates a new AddOnReservationPackageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddOnReservationPackageTypeWithDefaults

`func NewAddOnReservationPackageTypeWithDefaults() *AddOnReservationPackageType`

NewAddOnReservationPackageTypeWithDefaults instantiates a new AddOnReservationPackageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheduleList

`func (o *AddOnReservationPackageType) GetScheduleList() []ReservationPackageScheduleType`

GetScheduleList returns the ScheduleList field if non-nil, zero value otherwise.

### GetScheduleListOk

`func (o *AddOnReservationPackageType) GetScheduleListOk() (*[]ReservationPackageScheduleType, bool)`

GetScheduleListOk returns a tuple with the ScheduleList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleList

`func (o *AddOnReservationPackageType) SetScheduleList(v []ReservationPackageScheduleType)`

SetScheduleList sets ScheduleList field to given value.

### HasScheduleList

`func (o *AddOnReservationPackageType) HasScheduleList() bool`

HasScheduleList returns a boolean if a field has been set.

### GetConsumptionDetails

`func (o *AddOnReservationPackageType) GetConsumptionDetails() PackageConsumptionType`

GetConsumptionDetails returns the ConsumptionDetails field if non-nil, zero value otherwise.

### GetConsumptionDetailsOk

`func (o *AddOnReservationPackageType) GetConsumptionDetailsOk() (*PackageConsumptionType, bool)`

GetConsumptionDetailsOk returns a tuple with the ConsumptionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionDetails

`func (o *AddOnReservationPackageType) SetConsumptionDetails(v PackageConsumptionType)`

SetConsumptionDetails sets ConsumptionDetails field to given value.

### HasConsumptionDetails

`func (o *AddOnReservationPackageType) HasConsumptionDetails() bool`

HasConsumptionDetails returns a boolean if a field has been set.

### GetPackageCode

`func (o *AddOnReservationPackageType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *AddOnReservationPackageType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *AddOnReservationPackageType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *AddOnReservationPackageType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetInternalId

`func (o *AddOnReservationPackageType) GetInternalId() float32`

GetInternalId returns the InternalId field if non-nil, zero value otherwise.

### GetInternalIdOk

`func (o *AddOnReservationPackageType) GetInternalIdOk() (*float32, bool)`

GetInternalIdOk returns a tuple with the InternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalId

`func (o *AddOnReservationPackageType) SetInternalId(v float32)`

SetInternalId sets InternalId field to given value.

### HasInternalId

`func (o *AddOnReservationPackageType) HasInternalId() bool`

HasInternalId returns a boolean if a field has been set.

### GetStartDate

`func (o *AddOnReservationPackageType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *AddOnReservationPackageType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *AddOnReservationPackageType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *AddOnReservationPackageType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *AddOnReservationPackageType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *AddOnReservationPackageType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *AddOnReservationPackageType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *AddOnReservationPackageType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetPackageGroup

`func (o *AddOnReservationPackageType) GetPackageGroup() string`

GetPackageGroup returns the PackageGroup field if non-nil, zero value otherwise.

### GetPackageGroupOk

`func (o *AddOnReservationPackageType) GetPackageGroupOk() (*string, bool)`

GetPackageGroupOk returns a tuple with the PackageGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageGroup

`func (o *AddOnReservationPackageType) SetPackageGroup(v string)`

SetPackageGroup sets PackageGroup field to given value.

### HasPackageGroup

`func (o *AddOnReservationPackageType) HasPackageGroup() bool`

HasPackageGroup returns a boolean if a field has been set.

### GetSource

`func (o *AddOnReservationPackageType) GetSource() ProductSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AddOnReservationPackageType) GetSourceOk() (*ProductSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AddOnReservationPackageType) SetSource(v ProductSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *AddOnReservationPackageType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAwardCode

`func (o *AddOnReservationPackageType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *AddOnReservationPackageType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *AddOnReservationPackageType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *AddOnReservationPackageType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetPoints

`func (o *AddOnReservationPackageType) GetPoints() int32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *AddOnReservationPackageType) GetPointsOk() (*int32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *AddOnReservationPackageType) SetPoints(v int32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *AddOnReservationPackageType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetCalculationRule

`func (o *AddOnReservationPackageType) GetCalculationRule() PackageCalculationRuleType`

GetCalculationRule returns the CalculationRule field if non-nil, zero value otherwise.

### GetCalculationRuleOk

`func (o *AddOnReservationPackageType) GetCalculationRuleOk() (*PackageCalculationRuleType, bool)`

GetCalculationRuleOk returns a tuple with the CalculationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationRule

`func (o *AddOnReservationPackageType) SetCalculationRule(v PackageCalculationRuleType)`

SetCalculationRule sets CalculationRule field to given value.

### HasCalculationRule

`func (o *AddOnReservationPackageType) HasCalculationRule() bool`

HasCalculationRule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


