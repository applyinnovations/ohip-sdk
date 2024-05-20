# ReservationUpsellInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UpsellInfo** | Pointer to [**UpsellInfoType**](UpsellInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationUpsellInfo

`func NewReservationUpsellInfo() *ReservationUpsellInfo`

NewReservationUpsellInfo instantiates a new ReservationUpsellInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationUpsellInfoWithDefaults

`func NewReservationUpsellInfoWithDefaults() *ReservationUpsellInfo`

NewReservationUpsellInfoWithDefaults instantiates a new ReservationUpsellInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationUpsellInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationUpsellInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationUpsellInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationUpsellInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUpsellInfo

`func (o *ReservationUpsellInfo) GetUpsellInfo() UpsellInfoType`

GetUpsellInfo returns the UpsellInfo field if non-nil, zero value otherwise.

### GetUpsellInfoOk

`func (o *ReservationUpsellInfo) GetUpsellInfoOk() (*UpsellInfoType, bool)`

GetUpsellInfoOk returns a tuple with the UpsellInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellInfo

`func (o *ReservationUpsellInfo) SetUpsellInfo(v UpsellInfoType)`

SetUpsellInfo sets UpsellInfo field to given value.

### HasUpsellInfo

`func (o *ReservationUpsellInfo) HasUpsellInfo() bool`

HasUpsellInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationUpsellInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationUpsellInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationUpsellInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationUpsellInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


