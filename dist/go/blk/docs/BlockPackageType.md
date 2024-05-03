# BlockPackageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConsumptionDetails** | Pointer to [**PackageConsumptionType**](PackageConsumptionType.md) |  | [optional] 
**EndDate** | Pointer to **string** | Required value when changing a package. If the original end date was null, then null is required. | [optional] 
**NewTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**PackageCode** | Pointer to **string** | Package code. This is the unique code used for the package and is a required element. | [optional] 
**PackageGroup** | Pointer to **string** | Package group code. If this package is part of a package group, the group code is indicated here. This is a required element and is part of the key to fetch the correct package record . | [optional] 
**PackageHeaderType** | Pointer to [**PackageCodeHeaderType**](PackageCodeHeaderType.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** | The rate code which contains this package. If the package is not part of a rate code, this will be empty. Required element and part of the key to fetch the correct package record. | [optional] 
**StartDate** | Pointer to **string** | Required value when changing a package. If the original start date was null, then null is required. | [optional] 

## Methods

### NewBlockPackageType

`func NewBlockPackageType() *BlockPackageType`

NewBlockPackageType instantiates a new BlockPackageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockPackageTypeWithDefaults

`func NewBlockPackageTypeWithDefaults() *BlockPackageType`

NewBlockPackageTypeWithDefaults instantiates a new BlockPackageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConsumptionDetails

`func (o *BlockPackageType) GetConsumptionDetails() PackageConsumptionType`

GetConsumptionDetails returns the ConsumptionDetails field if non-nil, zero value otherwise.

### GetConsumptionDetailsOk

`func (o *BlockPackageType) GetConsumptionDetailsOk() (*PackageConsumptionType, bool)`

GetConsumptionDetailsOk returns a tuple with the ConsumptionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionDetails

`func (o *BlockPackageType) SetConsumptionDetails(v PackageConsumptionType)`

SetConsumptionDetails sets ConsumptionDetails field to given value.

### HasConsumptionDetails

`func (o *BlockPackageType) HasConsumptionDetails() bool`

HasConsumptionDetails returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockPackageType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockPackageType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockPackageType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockPackageType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetNewTimeSpan

`func (o *BlockPackageType) GetNewTimeSpan() TimeSpanType`

GetNewTimeSpan returns the NewTimeSpan field if non-nil, zero value otherwise.

### GetNewTimeSpanOk

`func (o *BlockPackageType) GetNewTimeSpanOk() (*TimeSpanType, bool)`

GetNewTimeSpanOk returns a tuple with the NewTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTimeSpan

`func (o *BlockPackageType) SetNewTimeSpan(v TimeSpanType)`

SetNewTimeSpan sets NewTimeSpan field to given value.

### HasNewTimeSpan

`func (o *BlockPackageType) HasNewTimeSpan() bool`

HasNewTimeSpan returns a boolean if a field has been set.

### GetPackageCode

`func (o *BlockPackageType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *BlockPackageType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *BlockPackageType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *BlockPackageType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetPackageGroup

`func (o *BlockPackageType) GetPackageGroup() string`

GetPackageGroup returns the PackageGroup field if non-nil, zero value otherwise.

### GetPackageGroupOk

`func (o *BlockPackageType) GetPackageGroupOk() (*string, bool)`

GetPackageGroupOk returns a tuple with the PackageGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageGroup

`func (o *BlockPackageType) SetPackageGroup(v string)`

SetPackageGroup sets PackageGroup field to given value.

### HasPackageGroup

`func (o *BlockPackageType) HasPackageGroup() bool`

HasPackageGroup returns a boolean if a field has been set.

### GetPackageHeaderType

`func (o *BlockPackageType) GetPackageHeaderType() PackageCodeHeaderType`

GetPackageHeaderType returns the PackageHeaderType field if non-nil, zero value otherwise.

### GetPackageHeaderTypeOk

`func (o *BlockPackageType) GetPackageHeaderTypeOk() (*PackageCodeHeaderType, bool)`

GetPackageHeaderTypeOk returns a tuple with the PackageHeaderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageHeaderType

`func (o *BlockPackageType) SetPackageHeaderType(v PackageCodeHeaderType)`

SetPackageHeaderType sets PackageHeaderType field to given value.

### HasPackageHeaderType

`func (o *BlockPackageType) HasPackageHeaderType() bool`

HasPackageHeaderType returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *BlockPackageType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *BlockPackageType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *BlockPackageType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *BlockPackageType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockPackageType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockPackageType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockPackageType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockPackageType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


