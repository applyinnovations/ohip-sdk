# ReservationPackageOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedAllowanceReservationsInfo** | Pointer to [**LinkedAllowanceReservationsInfoType**](LinkedAllowanceReservationsInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PackagePostings** | Pointer to [**[]PackagePostingType**](PackagePostingType.md) | List of package postings. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationPackageOptions

`func NewReservationPackageOptions() *ReservationPackageOptions`

NewReservationPackageOptions instantiates a new ReservationPackageOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPackageOptionsWithDefaults

`func NewReservationPackageOptionsWithDefaults() *ReservationPackageOptions`

NewReservationPackageOptionsWithDefaults instantiates a new ReservationPackageOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedAllowanceReservationsInfo

`func (o *ReservationPackageOptions) GetLinkedAllowanceReservationsInfo() LinkedAllowanceReservationsInfoType`

GetLinkedAllowanceReservationsInfo returns the LinkedAllowanceReservationsInfo field if non-nil, zero value otherwise.

### GetLinkedAllowanceReservationsInfoOk

`func (o *ReservationPackageOptions) GetLinkedAllowanceReservationsInfoOk() (*LinkedAllowanceReservationsInfoType, bool)`

GetLinkedAllowanceReservationsInfoOk returns a tuple with the LinkedAllowanceReservationsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedAllowanceReservationsInfo

`func (o *ReservationPackageOptions) SetLinkedAllowanceReservationsInfo(v LinkedAllowanceReservationsInfoType)`

SetLinkedAllowanceReservationsInfo sets LinkedAllowanceReservationsInfo field to given value.

### HasLinkedAllowanceReservationsInfo

`func (o *ReservationPackageOptions) HasLinkedAllowanceReservationsInfo() bool`

HasLinkedAllowanceReservationsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationPackageOptions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationPackageOptions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationPackageOptions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationPackageOptions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPackagePostings

`func (o *ReservationPackageOptions) GetPackagePostings() []PackagePostingType`

GetPackagePostings returns the PackagePostings field if non-nil, zero value otherwise.

### GetPackagePostingsOk

`func (o *ReservationPackageOptions) GetPackagePostingsOk() (*[]PackagePostingType, bool)`

GetPackagePostingsOk returns a tuple with the PackagePostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackagePostings

`func (o *ReservationPackageOptions) SetPackagePostings(v []PackagePostingType)`

SetPackagePostings sets PackagePostings field to given value.

### HasPackagePostings

`func (o *ReservationPackageOptions) HasPackagePostings() bool`

HasPackagePostings returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *ReservationPackageOptions) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *ReservationPackageOptions) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *ReservationPackageOptions) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *ReservationPackageOptions) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationPackageOptions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationPackageOptions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationPackageOptions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationPackageOptions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


