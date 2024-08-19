# ProductAvailabilityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardNumber** | Pointer to **float32** | An identifying number of the award, assigned by the system when the award was issued. | [optional] 
**AwardType** | Pointer to **string** | Unique code that identifies this award. | [optional] 
**AwardValidFrom** | Pointer to **string** | The valid time period from when the award can be issued. | [optional] 
**AwardValidTo** | Pointer to **string** | The valid time to an issued award. | [optional] 
**CancelPenaltyCharge** | Pointer to **float32** | The cancel penalty charge. | [optional] 
**CancelPenaltyDays** | Pointer to **float32** | Number of days before arrival when a reservation may be cancelled without an award points penalty. | [optional] 
**CancelPenaltyPoints** | Pointer to **float32** | The award points that will be forfeited if the cancel penalty charge is applied. | [optional] 
**CancelPenaltyType** | Pointer to **string** | The penalty charge is either a percentage or a flat number of points. | [optional] 
**HotelId** | Pointer to **string** | HotelCode where the award will be consumed. | [optional] 
**PackageCode** | Pointer to **string** | Package/Product code for the award . | [optional] 
**PackageDescription** | Pointer to **string** | Description of the product. | [optional] 
**PointsRequired** | Pointer to **float32** | The number of points that must be redeemed for this award. | [optional] 
**RawIssueKey** | Pointer to **string** | Issue key in format of Raw data. | [optional] 
**TotalAvailablePoints** | Pointer to **float32** | Total award points available for redemption. | [optional] 

## Methods

### NewProductAvailabilityType

`func NewProductAvailabilityType() *ProductAvailabilityType`

NewProductAvailabilityType instantiates a new ProductAvailabilityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductAvailabilityTypeWithDefaults

`func NewProductAvailabilityTypeWithDefaults() *ProductAvailabilityType`

NewProductAvailabilityTypeWithDefaults instantiates a new ProductAvailabilityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardNumber

`func (o *ProductAvailabilityType) GetAwardNumber() float32`

GetAwardNumber returns the AwardNumber field if non-nil, zero value otherwise.

### GetAwardNumberOk

`func (o *ProductAvailabilityType) GetAwardNumberOk() (*float32, bool)`

GetAwardNumberOk returns a tuple with the AwardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardNumber

`func (o *ProductAvailabilityType) SetAwardNumber(v float32)`

SetAwardNumber sets AwardNumber field to given value.

### HasAwardNumber

`func (o *ProductAvailabilityType) HasAwardNumber() bool`

HasAwardNumber returns a boolean if a field has been set.

### GetAwardType

`func (o *ProductAvailabilityType) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *ProductAvailabilityType) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *ProductAvailabilityType) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *ProductAvailabilityType) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetAwardValidFrom

`func (o *ProductAvailabilityType) GetAwardValidFrom() string`

GetAwardValidFrom returns the AwardValidFrom field if non-nil, zero value otherwise.

### GetAwardValidFromOk

`func (o *ProductAvailabilityType) GetAwardValidFromOk() (*string, bool)`

GetAwardValidFromOk returns a tuple with the AwardValidFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardValidFrom

`func (o *ProductAvailabilityType) SetAwardValidFrom(v string)`

SetAwardValidFrom sets AwardValidFrom field to given value.

### HasAwardValidFrom

`func (o *ProductAvailabilityType) HasAwardValidFrom() bool`

HasAwardValidFrom returns a boolean if a field has been set.

### GetAwardValidTo

`func (o *ProductAvailabilityType) GetAwardValidTo() string`

GetAwardValidTo returns the AwardValidTo field if non-nil, zero value otherwise.

### GetAwardValidToOk

`func (o *ProductAvailabilityType) GetAwardValidToOk() (*string, bool)`

GetAwardValidToOk returns a tuple with the AwardValidTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardValidTo

`func (o *ProductAvailabilityType) SetAwardValidTo(v string)`

SetAwardValidTo sets AwardValidTo field to given value.

### HasAwardValidTo

`func (o *ProductAvailabilityType) HasAwardValidTo() bool`

HasAwardValidTo returns a boolean if a field has been set.

### GetCancelPenaltyCharge

`func (o *ProductAvailabilityType) GetCancelPenaltyCharge() float32`

GetCancelPenaltyCharge returns the CancelPenaltyCharge field if non-nil, zero value otherwise.

### GetCancelPenaltyChargeOk

`func (o *ProductAvailabilityType) GetCancelPenaltyChargeOk() (*float32, bool)`

GetCancelPenaltyChargeOk returns a tuple with the CancelPenaltyCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyCharge

`func (o *ProductAvailabilityType) SetCancelPenaltyCharge(v float32)`

SetCancelPenaltyCharge sets CancelPenaltyCharge field to given value.

### HasCancelPenaltyCharge

`func (o *ProductAvailabilityType) HasCancelPenaltyCharge() bool`

HasCancelPenaltyCharge returns a boolean if a field has been set.

### GetCancelPenaltyDays

`func (o *ProductAvailabilityType) GetCancelPenaltyDays() float32`

GetCancelPenaltyDays returns the CancelPenaltyDays field if non-nil, zero value otherwise.

### GetCancelPenaltyDaysOk

`func (o *ProductAvailabilityType) GetCancelPenaltyDaysOk() (*float32, bool)`

GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyDays

`func (o *ProductAvailabilityType) SetCancelPenaltyDays(v float32)`

SetCancelPenaltyDays sets CancelPenaltyDays field to given value.

### HasCancelPenaltyDays

`func (o *ProductAvailabilityType) HasCancelPenaltyDays() bool`

HasCancelPenaltyDays returns a boolean if a field has been set.

### GetCancelPenaltyPoints

`func (o *ProductAvailabilityType) GetCancelPenaltyPoints() float32`

GetCancelPenaltyPoints returns the CancelPenaltyPoints field if non-nil, zero value otherwise.

### GetCancelPenaltyPointsOk

`func (o *ProductAvailabilityType) GetCancelPenaltyPointsOk() (*float32, bool)`

GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyPoints

`func (o *ProductAvailabilityType) SetCancelPenaltyPoints(v float32)`

SetCancelPenaltyPoints sets CancelPenaltyPoints field to given value.

### HasCancelPenaltyPoints

`func (o *ProductAvailabilityType) HasCancelPenaltyPoints() bool`

HasCancelPenaltyPoints returns a boolean if a field has been set.

### GetCancelPenaltyType

`func (o *ProductAvailabilityType) GetCancelPenaltyType() string`

GetCancelPenaltyType returns the CancelPenaltyType field if non-nil, zero value otherwise.

### GetCancelPenaltyTypeOk

`func (o *ProductAvailabilityType) GetCancelPenaltyTypeOk() (*string, bool)`

GetCancelPenaltyTypeOk returns a tuple with the CancelPenaltyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyType

`func (o *ProductAvailabilityType) SetCancelPenaltyType(v string)`

SetCancelPenaltyType sets CancelPenaltyType field to given value.

### HasCancelPenaltyType

`func (o *ProductAvailabilityType) HasCancelPenaltyType() bool`

HasCancelPenaltyType returns a boolean if a field has been set.

### GetHotelId

`func (o *ProductAvailabilityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProductAvailabilityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProductAvailabilityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProductAvailabilityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPackageCode

`func (o *ProductAvailabilityType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *ProductAvailabilityType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *ProductAvailabilityType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *ProductAvailabilityType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetPackageDescription

`func (o *ProductAvailabilityType) GetPackageDescription() string`

GetPackageDescription returns the PackageDescription field if non-nil, zero value otherwise.

### GetPackageDescriptionOk

`func (o *ProductAvailabilityType) GetPackageDescriptionOk() (*string, bool)`

GetPackageDescriptionOk returns a tuple with the PackageDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageDescription

`func (o *ProductAvailabilityType) SetPackageDescription(v string)`

SetPackageDescription sets PackageDescription field to given value.

### HasPackageDescription

`func (o *ProductAvailabilityType) HasPackageDescription() bool`

HasPackageDescription returns a boolean if a field has been set.

### GetPointsRequired

`func (o *ProductAvailabilityType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *ProductAvailabilityType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *ProductAvailabilityType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *ProductAvailabilityType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetRawIssueKey

`func (o *ProductAvailabilityType) GetRawIssueKey() string`

GetRawIssueKey returns the RawIssueKey field if non-nil, zero value otherwise.

### GetRawIssueKeyOk

`func (o *ProductAvailabilityType) GetRawIssueKeyOk() (*string, bool)`

GetRawIssueKeyOk returns a tuple with the RawIssueKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawIssueKey

`func (o *ProductAvailabilityType) SetRawIssueKey(v string)`

SetRawIssueKey sets RawIssueKey field to given value.

### HasRawIssueKey

`func (o *ProductAvailabilityType) HasRawIssueKey() bool`

HasRawIssueKey returns a boolean if a field has been set.

### GetTotalAvailablePoints

`func (o *ProductAvailabilityType) GetTotalAvailablePoints() float32`

GetTotalAvailablePoints returns the TotalAvailablePoints field if non-nil, zero value otherwise.

### GetTotalAvailablePointsOk

`func (o *ProductAvailabilityType) GetTotalAvailablePointsOk() (*float32, bool)`

GetTotalAvailablePointsOk returns a tuple with the TotalAvailablePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAvailablePoints

`func (o *ProductAvailabilityType) SetTotalAvailablePoints(v float32)`

SetTotalAvailablePoints sets TotalAvailablePoints field to given value.

### HasTotalAvailablePoints

`func (o *ProductAvailabilityType) HasTotalAvailablePoints() bool`

HasTotalAvailablePoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


