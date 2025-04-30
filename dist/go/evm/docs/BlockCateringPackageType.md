# BlockCateringPackageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Block. | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PackageCode** | Pointer to **string** | Package Code which will be added to the block. | [optional] 
**PriceCode** | Pointer to **string** | Price Code of the package. | [optional] 
**Status** | Pointer to **string** | Status of the catering block | [optional] 
**RentalCode** | Pointer to **string** | Rate code of the associated package | [optional] 
**BeginDate** | Pointer to **string** | Begin Date for package/template events | [optional] 
**PackageHotelCode** | Pointer to **string** | Hotel Code of the associated package. | [optional] 
**PackageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**FlatRate** | Pointer to **bool** | Defines if Flat Rate is applicable for the package. | [optional] 
**Duration** | Pointer to **int32** | Catering Package duration. | [optional] 
**Attendees** | Pointer to [**CateringEventsAttendeesType**](CateringEventsAttendeesType.md) |  | [optional] 
**PackageActual** | Pointer to **bool** | Indicates whether all event from the package is in Actual Status. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PriceDescription** | Pointer to **string** | Price Code description of the associated package. | [optional] 
**CateringPackageRemovable** | Pointer to **bool** | Notifies whether this catering package can be deleted or not. | [optional] 
**NonPackagedResourcesExist** | Pointer to **bool** | Flat to determine if the events the events associated with this package has non packaged resources | [optional] 

## Methods

### NewBlockCateringPackageType

`func NewBlockCateringPackageType() *BlockCateringPackageType`

NewBlockCateringPackageType instantiates a new BlockCateringPackageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCateringPackageTypeWithDefaults

`func NewBlockCateringPackageTypeWithDefaults() *BlockCateringPackageType`

NewBlockCateringPackageTypeWithDefaults instantiates a new BlockCateringPackageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockCateringPackageType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockCateringPackageType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockCateringPackageType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockCateringPackageType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *BlockCateringPackageType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockCateringPackageType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockCateringPackageType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockCateringPackageType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetPackageCode

`func (o *BlockCateringPackageType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *BlockCateringPackageType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *BlockCateringPackageType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *BlockCateringPackageType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetPriceCode

`func (o *BlockCateringPackageType) GetPriceCode() string`

GetPriceCode returns the PriceCode field if non-nil, zero value otherwise.

### GetPriceCodeOk

`func (o *BlockCateringPackageType) GetPriceCodeOk() (*string, bool)`

GetPriceCodeOk returns a tuple with the PriceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceCode

`func (o *BlockCateringPackageType) SetPriceCode(v string)`

SetPriceCode sets PriceCode field to given value.

### HasPriceCode

`func (o *BlockCateringPackageType) HasPriceCode() bool`

HasPriceCode returns a boolean if a field has been set.

### GetStatus

`func (o *BlockCateringPackageType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BlockCateringPackageType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BlockCateringPackageType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BlockCateringPackageType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRentalCode

`func (o *BlockCateringPackageType) GetRentalCode() string`

GetRentalCode returns the RentalCode field if non-nil, zero value otherwise.

### GetRentalCodeOk

`func (o *BlockCateringPackageType) GetRentalCodeOk() (*string, bool)`

GetRentalCodeOk returns a tuple with the RentalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCode

`func (o *BlockCateringPackageType) SetRentalCode(v string)`

SetRentalCode sets RentalCode field to given value.

### HasRentalCode

`func (o *BlockCateringPackageType) HasRentalCode() bool`

HasRentalCode returns a boolean if a field has been set.

### GetBeginDate

`func (o *BlockCateringPackageType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *BlockCateringPackageType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *BlockCateringPackageType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *BlockCateringPackageType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetPackageHotelCode

`func (o *BlockCateringPackageType) GetPackageHotelCode() string`

GetPackageHotelCode returns the PackageHotelCode field if non-nil, zero value otherwise.

### GetPackageHotelCodeOk

`func (o *BlockCateringPackageType) GetPackageHotelCodeOk() (*string, bool)`

GetPackageHotelCodeOk returns a tuple with the PackageHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageHotelCode

`func (o *BlockCateringPackageType) SetPackageHotelCode(v string)`

SetPackageHotelCode sets PackageHotelCode field to given value.

### HasPackageHotelCode

`func (o *BlockCateringPackageType) HasPackageHotelCode() bool`

HasPackageHotelCode returns a boolean if a field has been set.

### GetPackageId

`func (o *BlockCateringPackageType) GetPackageId() UniqueIDType`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *BlockCateringPackageType) GetPackageIdOk() (*UniqueIDType, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *BlockCateringPackageType) SetPackageId(v UniqueIDType)`

SetPackageId sets PackageId field to given value.

### HasPackageId

`func (o *BlockCateringPackageType) HasPackageId() bool`

HasPackageId returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *BlockCateringPackageType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *BlockCateringPackageType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *BlockCateringPackageType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *BlockCateringPackageType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.

### GetFlatRate

`func (o *BlockCateringPackageType) GetFlatRate() bool`

GetFlatRate returns the FlatRate field if non-nil, zero value otherwise.

### GetFlatRateOk

`func (o *BlockCateringPackageType) GetFlatRateOk() (*bool, bool)`

GetFlatRateOk returns a tuple with the FlatRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatRate

`func (o *BlockCateringPackageType) SetFlatRate(v bool)`

SetFlatRate sets FlatRate field to given value.

### HasFlatRate

`func (o *BlockCateringPackageType) HasFlatRate() bool`

HasFlatRate returns a boolean if a field has been set.

### GetDuration

`func (o *BlockCateringPackageType) GetDuration() int32`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *BlockCateringPackageType) GetDurationOk() (*int32, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *BlockCateringPackageType) SetDuration(v int32)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *BlockCateringPackageType) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetAttendees

`func (o *BlockCateringPackageType) GetAttendees() CateringEventsAttendeesType`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *BlockCateringPackageType) GetAttendeesOk() (*CateringEventsAttendeesType, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *BlockCateringPackageType) SetAttendees(v CateringEventsAttendeesType)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *BlockCateringPackageType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetPackageActual

`func (o *BlockCateringPackageType) GetPackageActual() bool`

GetPackageActual returns the PackageActual field if non-nil, zero value otherwise.

### GetPackageActualOk

`func (o *BlockCateringPackageType) GetPackageActualOk() (*bool, bool)`

GetPackageActualOk returns a tuple with the PackageActual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageActual

`func (o *BlockCateringPackageType) SetPackageActual(v bool)`

SetPackageActual sets PackageActual field to given value.

### HasPackageActual

`func (o *BlockCateringPackageType) HasPackageActual() bool`

HasPackageActual returns a boolean if a field has been set.

### GetPrice

`func (o *BlockCateringPackageType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *BlockCateringPackageType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *BlockCateringPackageType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *BlockCateringPackageType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPriceDescription

`func (o *BlockCateringPackageType) GetPriceDescription() string`

GetPriceDescription returns the PriceDescription field if non-nil, zero value otherwise.

### GetPriceDescriptionOk

`func (o *BlockCateringPackageType) GetPriceDescriptionOk() (*string, bool)`

GetPriceDescriptionOk returns a tuple with the PriceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceDescription

`func (o *BlockCateringPackageType) SetPriceDescription(v string)`

SetPriceDescription sets PriceDescription field to given value.

### HasPriceDescription

`func (o *BlockCateringPackageType) HasPriceDescription() bool`

HasPriceDescription returns a boolean if a field has been set.

### GetCateringPackageRemovable

`func (o *BlockCateringPackageType) GetCateringPackageRemovable() bool`

GetCateringPackageRemovable returns the CateringPackageRemovable field if non-nil, zero value otherwise.

### GetCateringPackageRemovableOk

`func (o *BlockCateringPackageType) GetCateringPackageRemovableOk() (*bool, bool)`

GetCateringPackageRemovableOk returns a tuple with the CateringPackageRemovable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringPackageRemovable

`func (o *BlockCateringPackageType) SetCateringPackageRemovable(v bool)`

SetCateringPackageRemovable sets CateringPackageRemovable field to given value.

### HasCateringPackageRemovable

`func (o *BlockCateringPackageType) HasCateringPackageRemovable() bool`

HasCateringPackageRemovable returns a boolean if a field has been set.

### GetNonPackagedResourcesExist

`func (o *BlockCateringPackageType) GetNonPackagedResourcesExist() bool`

GetNonPackagedResourcesExist returns the NonPackagedResourcesExist field if non-nil, zero value otherwise.

### GetNonPackagedResourcesExistOk

`func (o *BlockCateringPackageType) GetNonPackagedResourcesExistOk() (*bool, bool)`

GetNonPackagedResourcesExistOk returns a tuple with the NonPackagedResourcesExist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonPackagedResourcesExist

`func (o *BlockCateringPackageType) SetNonPackagedResourcesExist(v bool)`

SetNonPackagedResourcesExist sets NonPackagedResourcesExist field to given value.

### HasNonPackagedResourcesExist

`func (o *BlockCateringPackageType) HasNonPackagedResourcesExist() bool`

HasNonPackagedResourcesExist returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


